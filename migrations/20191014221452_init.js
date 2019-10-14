const migrationHelper = require('../db/migrationHelper');

exports.up = async function(knex) {
    await knex.schema.createTable('cat', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.datetime('birthday').notNullable();
        table.string('gender').notNullable();
        table.string('colour').notNullable();
        table.integer('sire_id').unsigned().nullable();
        table.integer('dam_id').unsigned().nullable();
        table.string('title').notNullable();
        table.string('breed').notNullable();
        table.string('photo_link').notNullable();

        migrationHelper.addTimestamps(knex, table);
    });

    await knex.schema.createTable('cattery', function (table) {
        table.increments();
        table.decimal('coord_x', 7, 4).notNullable();
        table.decimal('coord_y', 7, 4).notNullable();
        table.string('name').notNullable();
        table.string('contact_info');
        table.string('website');

        migrationHelper.addTimestamps(knex, table);
    });

    return Promise.resolve();
};

exports.down = async function(knex) {
    await knex.schema.dropTable('cat');
    await knex.schema.dropTable('cattery');

    return Promise.resolve();
};
