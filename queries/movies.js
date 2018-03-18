const knex = require('./db')

const getAllMovies = () => {
  return knex('movies')
    .select()
}

const getOneMovie = (id) => {
  return knex('movies')
    .select()
    .where('id', id)
}

const createNewMovie = (title, director, year, rating) => {
  return knex
    .insert({ title, director, year, rating })
    .into('movies')
    .returning('*')
}

const updateMovie = (title, director, year, rating, id) => {
  return knex('movies')
    .where('id', id)
    .update({ title, director, year, rating })
    .returning('*')
}

const deleteMovie = (id) => {
  return knex('movies')
    .where('id', id)
    .del()
}

module.exports = { getAllMovies, getOneMovie, createNewMovie, updateMovie, deleteMovie }