let http = require('http')
var map = require('through2-map')

let server = http.createServer((request, response) => {
  if (request.method !== 'POST') {
    return response.end()
  }
  request.pipe(map(c => c.toString().toUpperCase())).pipe(response)
})

server.listen(process.argv[2])
