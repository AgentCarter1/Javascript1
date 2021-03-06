const video = document.getElementById("video");
const sonuc =true;

let islem = new Promise((resolve,reject)=>{
  if(sonuc){
    resolve(faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
    faceapi.nets.faceExpressionNet.loadFromUri("/models"));
  }else{
    reject("İşlem Başarısız");
  }
})

islem.then(function(){startCamera();})
.catch((data)=>{console.log(data)});

function startCamera() {
  navigator.getUserMedia(
    {video: {}},
    stream => (video.srcObject = stream),
    err => console.log(err)
  );
}

video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);
  const Cerceve = {
    width: video.width,
    height: video.height
  };
  faceapi.matchDimensions(canvas, Cerceve);
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    const resizedDetections = faceapi.resizeResults(detections, Cerceve);
    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
  },150);
});
