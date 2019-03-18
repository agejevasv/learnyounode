let fs = require('fs')
let module_06 = require('./module_06.js')

module_06(process.argv[2], process.argv[3], (_, data) => {
  console.log(data.join('\n'))
})
