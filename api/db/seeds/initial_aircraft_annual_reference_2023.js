/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('aircraft_annual_reference').del()
  await knex('aircraft_annual_reference').insert([
    {
      fiscal_year: 2023,
      airframe: 'KC-135',
      'acft1': 85,
      'acft2': 145,
      'acft3': 200,
      'acft4': 225,
      'acft5': 235,
      'acft6': 240,
      'acft7': 245,
      'acft8': 250,
      'acft9': 255,
      'acft10': 260,
      'acft11': 265,
      'acft12': 270,
      'acft13': 275,
      'acft14': 280,
      'acft15': 285,
      'acft16': 290,
    },
    {
      fiscal_year: 2023,
      airframe: 'F-22',
      'acft1': null,
      'acft2': 50,
      'acft3': null,
      'acft4': 75,
      'acft5': null,
      'acft6': 90,
      'acft7': null,
      'acft8': 100,
      'acft9': null,
      'acft10': 110,
      'acft11': null,
      'acft12': 120,
      'acft13': null,
      'acft14': 125,
      'acft15': null,
      'acft16': 125,
    },
    {
      fiscal_year: 2023,
      airframe: 'F-35',
      'acft1': null,
      'acft2': 50,
      'acft3': null,
      'acft4': 75,
      'acft5': null,
      'acft6': 90,
      'acft7': null,
      'acft8': 100,
      'acft9': null,
      'acft10': 110,
      'acft11': null,
      'acft12': 120,
      'acft13': null,
      'acft14': 125,
      'acft15': null,
      'acft16': 125,
    },
    {
      fiscal_year: 2023,
      airframe: 'A-10',
      'acft1': null,
      'acft2': 50,
      'acft3': null,
      'acft4': 75,
      'acft5': null,
      'acft6': 90,
      'acft7': null,
      'acft8': 100,
      'acft9': null,
      'acft10': 110,
      'acft11': null,
      'acft12': 120,
      'acft13': null,
      'acft14': 125,
      'acft15': null,
      'acft16': 125,
    },
    {
      fiscal_year: 2023,
      airframe: 'F-15C',
      'acft1': null,
      'acft2': 50,
      'acft3': null,
      'acft4': 75,
      'acft5': null,
      'acft6': 90,
      'acft7': null,
      'acft8': 100,
      'acft9': null,
      'acft10': 110,
      'acft11': null,
      'acft12': 120,
      'acft13': null,
      'acft14': 125,
      'acft15': null,
      'acft16': 125,
    },
    {
      fiscal_year: 2023,
      airframe: 'C-130',
      'acft1': 85,
      'acft2': 145,
      'acft3': 200,
      'acft4': 225,
      'acft5': 235,
      'acft6': 240,
      'acft7': 245,
      'acft8': 250,
      'acft9': 255,
      'acft10': 260,
      'acft11': 265,
      'acft12': 270,
      'acft13': 275,
      'acft14': 280,
      'acft15': 285,
      'acft16': 290,
    },
    {
      fiscal_year: 2023,
      airframe: 'C-17',
      'acft1': 85,
      'acft2': 145,
      'acft3': 200,
      'acft4': 225,
      'acft5': 235,
      'acft6': 240,
      'acft7': 245,
      'acft8': 250,
      'acft9': 255,
      'acft10': 260,
      'acft11': 265,
      'acft12': 270,
      'acft13': 275,
      'acft14': 280,
      'acft15': 285,
      'acft16': 290,
    },
    {
      fiscal_year: 2023,
      airframe: 'C-5',
      'acft1': 85,
      'acft2': 145,
      'acft3': 200,
      'acft4': 225,
      'acft5': 235,
      'acft6': 240,
      'acft7': 245,
      'acft8': 250,
      'acft9': 255,
      'acft10': 260,
      'acft11': 265,
      'acft12': 270,
      'acft13': 275,
      'acft14': 280,
      'acft15': 285,
      'acft16': 290,
    },
  ]);
};
