const model = require('../models/movies')


const getAll = (req, res) => {
  const data = model.getAll()
  data.then(result => {
    res.status(200).json( result )
  })
}

const getOne = (req, res) => {
  const data = model.getOne(req.params)
  data.then(result => {
    res.status(200).json( result )
  })
}

const create = (req, res) => {
  const data = model.create(req.body)
  data.then(result => {
    res.status(201).json( result )
  })
}

const update = (req, res) => {
  const data = model.update(req.body, req.params)
  data.then(result => {
    res.status(200).json( result )
  })
}

const del = (req, res) => {
  const data = model.del(req.params)
  data.then(result => {
    res.status(204).json( result )
  })
}

module.exports = { getAll, getOne, create, update, del }