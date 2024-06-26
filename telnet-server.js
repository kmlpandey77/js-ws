var telnet = require('telnet')
 
telnet.createServer(function (client) {
 
  // make unicode characters work properly
  client.do.transmit_binary()
 
  // make the client emit 'window size' events
  client.do.window_size()
 
  // listen for the window size events from the client
  client.on('window size', function (e) {
    if (e.command === 'sb') {
      console.log('telnet window resized to %d x %d', e.width, e.height)
    }
  })
 
  // listen for the actual data from the client
  client.on('data', function (b) {
    client.write(b)
  })
 
  client.write('connected to Telnet server!')
 
}).listen(230)
