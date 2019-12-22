const Express = require('express');

const solderController = Express();

solderController.use('/v0.7/api/mod', require('./solder_compat/mod'));
solderController.use('/v0.7/api/modpack', require('./solder_compat/modpack'));
solderController.use('/v0.7/api/verify', require('./solder_compat/verify'));

solderController.get('/v0.7/api', (req, res) => {
    return res.json({
        api: "TechnicSolder",
        version: "v0.7",
        stream: "DEV",
    })
})
module.exports = solderController;