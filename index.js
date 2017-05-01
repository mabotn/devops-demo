var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
var _ = require('underscore')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// app.use(express.static('dist'))

setInterval(function() {
    io.emit('random', {
        value: _.random(0, 100)
    })
}, 5000)

http.listen(8000)

module.exports = http