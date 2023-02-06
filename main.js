noseX = 0
noseY = 0


function preload()
{
    clown_nose = loadImage("https://i.postimg.cc/GpTgF1Zr/wig-And-Clown-Nose.png");
}

function setup()
{
    console.log("creating canvas");
    canvas = createCanvas(300,300);
    canvas.center();
    console.log("created canvas");
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        
    }
}
function modelLoaded()
{
    console.log("PoseNet is initiallised");
}
function draw()
{
    image(video, 0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
    image(clown_nose, noseX-130, noseY-190, 250, 250);
    
}

function take_snapshot()
{
    save("myFilter.png");
}