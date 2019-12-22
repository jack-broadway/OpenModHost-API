const knexConfig = require('../knexfile');
const logger = require('./logger');
// Select appropriate connection
let knexOptions = {};
if(process.env.NODE_ENV === 'DEVELOPMENT'){
        
    knexOptions = knexConfig.development
} else {
    knexOptions = knexConfig.production
}
logger.info(`Connecting to database in ${process.env.NODE_ENV || 'PRODUCTION'} mode`)
const knex = require('knex')(knexOptions);

module.exports = knex;