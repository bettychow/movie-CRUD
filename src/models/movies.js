
const queries = require('../../queries/movies')


const getAll = () => {
  const movies = queries.getAllMovies()

  return movies
    .then(result => {
      return result
    })
}

const getOne = (params) => {
  let id = params.id
  const movie = queries.getOneMovie(id)
  
  return movie
    .then(result => { 
      return result[0]
    })
}

const create = (body) => {
  const title = body.title
  const director = body.director
  const year = body.year
  const rating = body.rating

  const newMovie = queries.createNewMovie(title, director, year, rating)
  return newMovie
    .then(newMovie => {
      return newMovie[0]
    })
}

const update = (body, params) => {
  const title = body.title
  const director = body.director
  const year = body.year
  const rating = body.rating
  const id = params.id

  const updatedMovie = queries.updateMovie(title, director, year, rating, id)

  return updatedMovie
    .then(result => {
      return result[0]
    }) 
}

const del = (params) => {
  const id = params.id
  const deleteMovie = queries.deleteMovie(id)

  return deleteMovie
    .then(result => {
      return result
    })
}

module.exports = { getAll, getOne, create, update, del }