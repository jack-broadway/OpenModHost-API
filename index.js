const Express = require('express');
const Morgan = require('morgan');

const logger = require('./lib/logger');
const knex = require('./lib/db_connection');
// Express Setup
const app = Express();
app.use(Morgan('dev'))


app.get('/api', (req, res) => {
    return res.json({
        name: 'OpenModAPI',
        version: require('./package.json').version,
    });
})

app.use('/api/solderCompat', require('./routes/solder'));

app.listen(8080, () => logger.info(`ModpackHost started on ${8080}`));