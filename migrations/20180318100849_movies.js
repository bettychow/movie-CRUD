
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
    table.increments('id')
    table.string('title').notNullable().defaultTo('')
    table.string('director').notNullable().defaultTo('')
    table.integer('year').notNullable().defaultTo(0)
    table.integer('rating').notNullable().defaultTo(0)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies')
};
