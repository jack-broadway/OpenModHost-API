const knex = require('../lib/db_connection');

module.exports = {
    getAll: () => {
        return knex.select().table('versions');
    },
    getByID: (id) => {
        return knex('versions').where('id', id);
    },
    getByResourceId: (resourceId) => {
        return knex('versions').where('resource_id', resourceId);
    }
}