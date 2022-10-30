status ="";
objects =[];
target = "";

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    target = document.getElementById("target").value;
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    console.log(target);
}

function draw(){
    image(video,0,0,480,380);
}