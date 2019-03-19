let http = require('http')

let printResponse = response => {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}

http
  .get(process.argv[2], printResponse)
  .on('error', console.error)
