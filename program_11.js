let http = require('http')
let fs = require('fs')

let server = http.createServer((_, response) => {
  response.writeHead(200, { 'content-type': 'text/plain' })
  fs.createReadStream(process.argv[3]).pipe(response)
})

server.listen(process.argv[2])
