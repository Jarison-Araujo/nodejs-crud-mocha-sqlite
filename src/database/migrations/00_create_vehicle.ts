import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('veiculos', table => {
        table.increments('id').primary();
        table.string('placa').notNullable();
        table.string('chassi').notNullable();
        table.string('renavam').notNullable();
        table.string('modelo').notNullable();
        table.string('marca').notNullable();
        table.string('ano').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('veiculos');
}