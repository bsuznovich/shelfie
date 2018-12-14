const bodyParser = require('body-parser')
const massive = require('massive')
const express = require('express')
require('dotenv').config()
const controller = require('./controller')
const {PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(connection => {
    app.set('db',connection)
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
})
    .catch(err => console.log(err))

    app.get('/api/inventory', controller.getInventory)

    app.post('/api/product', controller.addProduct)