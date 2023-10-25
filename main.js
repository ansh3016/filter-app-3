noseX=0;
noseY=0;
function preload(){
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotResult);
}

function modelLoaded(){
console.log("poseNet is initialized");
}

function gotResult(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x: "+results[0].pose.nose.x);
        mustache_x = results[0].pose.nose.x-30;
        console.log("nose y: "+results[0].pose.nose.y);
        mustache_y = results[0].pose.nose.y;
    };

}

function draw(){
image(video, 0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
circle(noseX, noseY, 20);
}

function take_snapshot(){
    save("my_picture.png");
}

