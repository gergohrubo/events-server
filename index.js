const express = require('express')
const db = require('./db')
const eventRouter = require('./event/router')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 4000

const corsMiddleware = cors()
const bodyParserMiddleware = bodyParser.json()

app.use(corsMiddleware)
app.use(bodyParserMiddleware)
app.use(eventRouter)

app.listen(port, () => console.log(`Server listening on port ${port}`))