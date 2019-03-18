let fs = require('fs')

fs.readFile(
  process.argv[2],
  'utf8',
  (_, data) => { console.log(data.split('\n').length - 1) }
)
