const express = require('express')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const routes=require('./routes')
const cors= require('cors')

const app = express()
app.use(cors())
app.use(express.static(`${__dirname}/my-travel-log/build`))
app.use(express.json())
app.use(logger('dev'))

app.use('/api',routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/my-travel-log/build/index.html`)
 })

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})