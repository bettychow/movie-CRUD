const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.disable('x-powered-by')

app.use(bodyParser.json())
app.use(cors())
//app.use(express.static(path.join(__dirname, ))

const moviesRoutes = require('./src/routes/movies')
app.use('/movies', moviesRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({error: {status, message: 'Something is not right'}})
})

app.use((req, res, next) => {
  res.status(400).json({error: {message: 'Not found'}})
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})