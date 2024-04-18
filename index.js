const ws = new WebSocket('ws://localhost:1234');

console.log('tst');

ws.addEventListener('open', function open() {
  console.log('connected');
});

ws.addEventListener('message', function incoming(data) {
  console.log(data);
});

// Add error handling as well
ws.addEventListener('error', function handleError(error) {
  console.error('WebSocket error:', error);
});

ws.addEventListener('close', function handleClose() {
  console.log('WebSocket connection closed');
});
