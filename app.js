const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const router = require('./routes/router')
const cors = require('cors')

//add middleware
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//add config
app.use(cors())

//add routing
app.use('/',router)

//start the server
app.listen(3004,() => {
    console.log('server started successfully on port 3004')
})

module.exports = app;