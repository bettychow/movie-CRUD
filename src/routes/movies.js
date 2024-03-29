const express = require('express')
const ctrl = require('../controllers/movies')
const router = express.Router()

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOne)
router.post('/', ctrl.create)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.del)


module.exports = router