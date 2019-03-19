let http = require('http')

const NUMBER_OF_URLS = 3

let responseData = []
let collected = 0

let collectResponse = buffer => {
  return response => {
    response.setEncoding('utf8')
    response.on('data', data => buffer.push(data))
    response.on('end', notifyEnd)
  }
}

let notifyEnd = data => {
  collected += 1

  if (collected == NUMBER_OF_URLS) {
    responseData.forEach(data => console.log(data.join('')))
  }
}

for (let i = 0; i < NUMBER_OF_URLS; i++) {
  responseData.splice(i, 0, []);
  http.get(process.argv[2 + i], collectResponse(responseData[i]))
}
