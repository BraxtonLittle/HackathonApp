/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      unit_name: 'PACAF',
      rank: 'SSgt',
      fname: 'Rick',
      lname: 'Sanchez',
      email_addy: 'rick@pacaf.mil',
      passwd: 'e6c3da5b206634d7f3f3586d747ffdb36b5c675757b380c6a5fe5c570c714349',
      salt: 10,
      access_level: 'PACAF',
    },
    {
      unit_name: '161 ARW',
      rank: '1Lt',
      fname: 'Morty',
      lname: 'Smith',
      email_addy: 'morty@wing1.mil',
      passwd: '1ba3d16e9881959f8c9a9762854f72c6e6321cdd44358a10a4e939033117eab9',
      salt: 10,
      access_level: 'WING',
    },
    {
      unit_name: '134 FS',
      rank: 'A1C',
      fname: 'Glootie',
      lname: 'Allen',
      email_addy: 'glootie@wing2.mil',
      passwd: '3acb59306ef6e660cf832d1d34c4fba3d88d616f0bb5c2a9e0f82d18ef6fc167',
      salt: 10,
      access_level: 'WING',
    },
  ]);
};
