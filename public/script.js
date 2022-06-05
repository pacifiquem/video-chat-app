let myVideoStream;
const videoGrid = document.getElementById("video-grid");
const myVideo = document.createElement("video");
myVideo.muted = true;
navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
})
.then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
});

const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    console.log(stream);
    video.addEventListener("loadedmetadata", () => {

       video.play();
       videoGrid.appendChild(video);
    });
};
