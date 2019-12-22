const knex = require('../lib/db_connection');

module.exports = {
    getAll: () => {
        return knex.select().table('resources');
    },
    getByID: (id) => {
        return knex('resources').where('id', id);
    },
    getBySlug: (slug) => {
        return knex('resources').where('slug', slug);
    }
}