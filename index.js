const Express = require('express');
const Morgan = require('morgan');

const logger = require('./lib/logger');

// Express Setup
const app = Express();
app.use(Morgan('dev'))


app.get('/', (req, res) => {
    return res.json({
        name: 'OpenModAPI',
        version: require('./package.json').version,
    });
})
app.listen(8080, () => logger.info(`ModpackHost started on ${8080}`));