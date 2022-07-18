status = "";
objects = [];
function preload()
{
    img = loadImage('work.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.position(350, 150);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Object Detected";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
 
function draw()
{

    if(status != "")
    image(img , 0 , 0 , 640 , 420);
    {
        for(var i=0; i< objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Detecting Objects";
            document.getElementById("object_number").innerHTML = "No. of Objects Detected:" + objects.length;

            fill(255,0,0);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(255,0,0);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function back()
{
    window.location = "index.html" ;
}