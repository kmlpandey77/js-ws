const ws = new WebSocket('ws://localhost:12345');

ws.onopen = function() {
    console.log("WebSocket connected.");
    ws.send("Hello, server! \n");
};

ws.onmessage = function(event) {
    console.log("Received from server: " + event.data);
};

ws.onclose = function() {
    console.log("WebSocket disconnected.");
};

ws.onerror = function(error) {
    console.error("WebSocket error: " + error);
};




// ws.addEventListener('open', function() {
//   console.log('connected');
  
// });

// ws.addEventListener('message', function(data) {
//   console.log(data);
// });

// // Add error handling as well
// ws.addEventListener('error', function (error) {
//   console.error('WebSocket error:', error);
// });

// ws.addEventListener('close', function() {
//   console.log('WebSocket connection closed');
// });


function enroll() {
  const data = JSON.stringify({
    "intent": "CaptureFingerprintForEnrollment",
    "data": {}
  });
  ws.send(data);
}

function verify() {
  const fingerprint = "string"
  const data = JSON.stringify({
    "intent": "CaptureFingerprintForVerification",
    "data": {fingerprint}
  });
  ws.send(data);
}

// Attach event listeners to buttons
document.getElementById('enroll').addEventListener('click', enroll);
document.getElementById('verify').addEventListener('click', verify);