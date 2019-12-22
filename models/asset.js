const knex = require('../lib/db_connection');

module.exports = {
    getAll: () => {
        return knex.select().table('assets');
    },
    getByID: (id) => {
        return knex('assets').where('id', id);
    },
    getByVersionId: (versionId) => {
        return knex('assets').where('version_id', versionId);
    }
}