function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 110);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Started!');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results); }
    }


function draw()
{   
    background(252, 3, 140);

}