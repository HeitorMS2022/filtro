var noseX = 0;
var noseY = 0;
function preload(){
    bigode = loadImage("https://i.postimg.cc/T2y8wyf7/bigode.png");
}
function setup(){
    var canvas = createCanvas(350, 300);
    canvas.position(550, 250);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function tirarfoto(){
    save("filtro.png");
}
function modelLoaded(){
    console.log("PoseNet foi iniciado")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nariz X igual" + results[0].pose.nose.x);
        console.log("nariz Y igual" + results[0].pose.nose.y);
        noseX = (results[0].pose.nose.x) + 15;
        noseY = results[0].pose.nose.y;
    }
}
function draw(){
    image(video, 0, 0, 350, 300);
    image(bigode, noseX, noseY, 30, 30);
}