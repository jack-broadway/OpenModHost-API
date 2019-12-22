const Express = require('express');
const logger = require('../../lib/logger');

const Resource = require('../../models/resource');
const Version = require('../../models/version');
const Asset = require('../../models/asset');

const modController = Express();

modController.get('/', (req,res) => {
    return res.status(401).json({error: 'No mod requested'});
})
modController.get('/:modSlug', async (req, res) => {
    // Get Query vars
    let modSlug = req.params.modSlug;
    logger.debug(modSlug);
    // Grab details about mod
    try {
        let modDetails = await Resource.getBySlug(modSlug);
        if(modDetails.length == 0){
            return res.status(404).json({
                error: 'Mod does not exist'
            })
        }
        let modVersions = await Version.getByResourceId(modDetails[0].id);

        return res.json({
            name: modDetails[0].slug,
            pretty_name: modDetails[0].readable_name,
            author: modDetails[0].author,
            description: modDetails[0].description,
            link: modDetails[0].homepage,
            donate: "",
            versions: modVersions.map((version) => version.version),
        })
    } catch (err) {
        logger.error(err.message);
        res.status(500).json({error: err.message})
    }
})
modController.get('/:modSlug/:modVersion', async (req, res) => {
    // Get Query Vars
    let modSlug = req.params.modSlug;
    let modVersion = req.params.modVersion;
    logger.debug(`${modSlug} : ${modVersion}`);
    // Grab Version Details
    try {
        let modDetails = await Resource.getBySlug(modSlug);
        if(modDetails.length == 0){
            return res.status(404).json({
                error: 'Mod does not exist'
            })
        }
        let modVersions = await Version.getByResourceId(modDetails[0].id);
        let filteredVersion = modVersions.filter(version => version.version == modVersion);
        if(filteredVersion.length == 0){
            return res.status(404).json({
                error: 'Mod version does not exist'
            })
        }
        let versionAssets = await Asset.getByVersionId(filteredVersion[0].id);
        if(filteredVersion.length == 0){
            return res.status(204);
        }
        return res.json({
            md5: versionAssets[0].md5,
            url: versionAssets[0].url,
        });
    } catch (err) {
        logger.error(err.message);
        res.status(500).json({error: err.message})
    }
})
module.exports = modController;