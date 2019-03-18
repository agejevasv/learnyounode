let fs = require('fs')

let filter = (_, data) => {
  console.log(
    data.filter(x => x.endsWith('.' + process.argv[3])).join('\n')
  )
}

fs.readdir(process.argv[2], 'utf8', filter)
