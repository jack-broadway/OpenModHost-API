const Express = require('express');
const config = require('../../config/config.json');
const logger = require('../../lib/logger');

const verifyController = Express();

verifyController.get('/:apiKey', (req, res) => {
    let apiKey = req.params.apiKey;
    logger.debug(apiKey);
    if(apiKey == config.solderCompat.apiKey){
        return res.json({
            name: 'OpenModAPI Solder Compat Key',
            valid: 'Key validated.',
            created_at: Date.now(),
        })
    } else {
        return res.status(401).json({
            error: 'Invalid key provided.'
        })
    }
})
module.exports = verifyController;