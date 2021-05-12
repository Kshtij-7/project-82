var canvas = document.getElementById("myCanvas")
var lastX = 0
var lastY = 0
var mouseEvent = "empty"

var ref = canvas.getContext("2d")
colorone = "black"
widthone = 10
radiusone = 5

canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e) {
    colorone = document.getElementById("color").value
    widthone = document.getElementById("width").value
    radiusone = document.getElementById("radius").value
    console.log(`Color is ${colorone}, Width is ${widthone}`)
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e) {
    var currentX = e.clientX - canvas.offsetLeft;
    var currentY = e.clientY - canvas.offsetTop;
    
    if(mouseEvent == "mouseDown") {
        ref.beginPath();
        ref.strokeStyle = colorone;
        ref.lineWidth = widthone;
        ref.arc(currentX, currentY, radiusone, 0, 2*Math.PI)
        ref.stroke();
        
    }

    
}

canvas.addEventListener("mouseup", my_mouseup)

function my_mouseup(e) {
    mouseEvent = "mouseUp"
}

canvas.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave(e) {
    mouseEvent = "mouseLeave"
}


function cleararea() {
    ref.clearRect(0, 0, canvas.width, canvas.height)

}
