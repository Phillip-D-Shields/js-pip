const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// media stream prompt
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.error("Error: ", error);
  }
}

button.addEventListener("click", async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

// on load
selectMediaStream();
