const express = require('express');
const PORT = 4000
const app = express()
const database = require('./config/database')
const cors = require('cors')
const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})