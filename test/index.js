var request = require('request')
var app = require('../')

var port = app.address().port

describe('Server', function() {
    it('respond with 200 OK', function(done) {
        request('http://localhost:' + port, function(err, response, body) {
            if (err) done(err)
            if (response.statusCode != 200) done(0)
            done()
        })
    })
})