let net = require('net')

let isoDate = () => {
  let d = new Date();
  return d.getFullYear() + '-' +
         pad(d.getMonth() + 1) + '-' +
         pad(d.getDate()) + ' ' +
         pad(d.getHours()) + ':' +
         pad(d.getMinutes())
}

let pad = num => ('00' + num).slice(-2)

let server = net.createServer(socket => {
  socket.write(isoDate())
  socket.end('\n')
})
server.listen(process.argv[2])
