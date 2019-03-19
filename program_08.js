let http = require('http')

let responseData = []

let printResponse = response => {
  response.setEncoding('utf8')
  response.on('error', console.error)
  response.on('data', data => responseData.push(data))
  response.on('end', data => {
    console.log(responseData.join('').length)
    console.log(responseData.join(''))
  })
}

http
  .get(process.argv[2], printResponse)
  .on('error', console.error)
