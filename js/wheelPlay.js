var vid = document.getElementById("v0");

var currentY = 0;
var frameNumber = 0;
var totalFrames = 30;
var frameJump = .4;

function onWheel(e){
	frameNumber += (e.deltaY > 0) ? frameJump : -frameJump;
}

window.addEventListener("wheel", onWheel, false);

function wheelPlay(){
	if(frameNumber > totalFrames) frameNumber = totalFrames;
	else if(frameNumber < 0) frameNumber = 0;

	vid.currentTime = frameNumber;
	window.requestAnimationFrame(wheelPlay);
}

window.requestAnimationFrame(wheelPlay);