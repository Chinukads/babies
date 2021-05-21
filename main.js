song="";

function preload(){
    song=loadSound("Music2.mp3");
}
function setup(){
    canvas=createCanvas(500, 500);
    canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}




function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}



