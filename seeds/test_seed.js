
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('assets').del()
  await knex('versions').del()
  await knex('resources').del()
  // Inserts seed entries
  await knex('resources').insert([
    {
      id: 'a12a96a3-a76e-4632-9705-ca111f1da136',
      slug: 'test_mod',
      readable_name: 'Test Mod',
      author: 'Alice Bob',
      description: 'The best mod around',
      homepage: 'http://example.com',
    },
  ]);
  await knex('versions').insert([
    {
      id: 'df98870a-5c48-4efe-93cf-ae5ea2820bde',
      resource_id: 'a12a96a3-a76e-4632-9705-ca111f1da136',
      version: '1.2.0',
    }
  ])
  await knex('assets').insert([
    {
      id: 'a12a96a3-a76e-4632-9705-ca111f1da136',
      version_id: 'df98870a-5c48-4efe-93cf-ae5ea2820bde',
      filename: 'test_mod.jar',
      url: 'http://example.com/test_mod.jar',
      filesize: 8713487,
      md5: '4d31fea5e1cc3a1542338201026ad04b'
    }
  ])
};
