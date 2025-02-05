let peerConnection;
let dataChannel;

// Log messages to the textarea
function logMessage(message) {
  const log = document.getElementById("log");
  log.value += message + "\n";
}

// Initialize the peer connection and data channel
function initializeConnection() {
  peerConnection = new RTCPeerConnection();

  // Create a data channel (only for the initiating user)
  dataChannel = peerConnection.createDataChannel("chat");
  dataChannel.onopen = () => logMessage("Data channel is open");
  dataChannel.onmessage = (event) => logMessage("Peer: " + event.data);

  // Listen for incoming ICE candidates
  peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
      logMessage(
        "Send this ICE candidate to the peer: " +
          JSON.stringify(event.candidate)
      );
    }
  };

  // Handle received data channels (for the answering user)
  peerConnection.ondatachannel = (event) => {
    dataChannel = event.channel;
    dataChannel.onopen = () => logMessage("Data channel is open");
    dataChannel.onmessage = (event) => logMessage("Peer: " + event.data);
  };
}

// // Create an offer (for User 1)
// async function createOffer() {
//   const offer = await peerConnection.createOffer();
//   await peerConnection.setLocalDescription(offer);
//   logMessage("Send this offer to the peer: " + JSON.stringify(offer));
// }

// // Create an answer (for User 2)
// async function createAnswer(offer) {
//   await peerConnection.setRemoteDescription(offer);
//   const answer = await peerConnection.createAnswer();
//   await peerConnection.setLocalDescription(answer);
//   logMessage("Send this answer to the peer: " + JSON.stringify(answer));
// }

// // Add received answer (for User 1)
// async function handleAnswer(answer) {
//   await peerConnection.setRemoteDescription(answer);
//   logMessage("Answer has been set as remote description");
// }

// // Add received ICE candidate
// async function addIceCandidate(candidate) {
//   await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
//   logMessage("ICE candidate added");
// }

// Send a message through the data channel
// function sendMessage() {
//   const input = document.getElementById("messageInput");
//   if (dataChannel && dataChannel.readyState === "open") {
//     dataChannel.send(input.value);
//     logMessage("You: " + input.value);
//     input.value = "";
//   }
// }

// Attach event listeners
// document.getElementById("sendMessage").addEventListener("click", sendMessage);

// For initialization (add buttons for specific user actions if needed)
initializeConnection();
