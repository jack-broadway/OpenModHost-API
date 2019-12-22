
exports.up = async function(knex) {
  await knex.schema.createTable('resources', (table) => {
    table.uuid('id');
    table.string('slug');
    table.string('readable_name');
    table.string('author');
    table.string('description');
    table.string('homepage');
    table.unique('slug');
    table.unique('id');
    table.timestamps(true, true);
  });
  await knex.schema.createTable('versions', (table) => {
    table.uuid('id');
    table.uuid('resource_id');
    table.string('version');
    table.unique('id');
    table.foreign('resource_id').references('resources.id');
    table.timestamps(true, true);
  })
  await knex.schema.createTable('assets', (table) => {
    table.uuid('id');
    table.uuid('version_id');
    table.string('filename');
    table.string('url');
    table.integer('filesize');
    table.string('md5');
    table.unique('id');
    table.foreign('version_id').references('versions.id');
    table.timestamps(true, true);
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('assets');
  await knex.schema.dropTableIfExists('versions');
  await knex.schema.dropTableIfExists('resources');
};
