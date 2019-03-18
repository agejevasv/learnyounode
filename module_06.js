let fs = require('fs')

let filter = (err, data, ext, callback) => {
  if (err) {
    return callback(err)
  }

  return callback(
    null,
    data.filter(x => x.endsWith('.' + ext))
  )
}

module.exports = (dir, ext, callback) => {
  fs.readdir(
    dir,
    'utf8',
    (err, data) => { filter(err, data, ext, callback) }
  )
}
