let http = require('http')
let url = require('url')

let parseTime = request => new Date(url.parse(request.url, true).query.iso)

let getTime = request => {
  let date = parseTime(request)
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

let getTimestamp = request => ({ unixtime: parseTime(request).getTime() })

let respondWithJson = (response, data) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(data))
}

let server = http.createServer((request, response) => {
  switch(request.url.split('?')[0]) {
    case '/api/parsetime':
      return respondWithJson(response, getTime(request))
    case '/api/unixtime':
      return respondWithJson(response, getTimestamp(request))
    default:
      response.writeHead(404)
      response.end()
  }
})

server.listen(process.argv[2])
