var vestit = document.getElementById("vestit"),
	dragX0 = 0,
	dragX1 = 0,
	frameNumber = 0,
	totalFrames = 30,
	speed = totalFrames/vestit.offsetWidth;

vestit.currentTime = 0;


//Mouse events
vestit.onmousedown = dragStart;

//Touch events
vestit.addEventListener("touchstart", dragStart);
vestit.addEventListener("touchend", dragEnd);
vestit.addEventListener("touchmove", dragAction);

function dragStart(e){
	vestit.classList.add("content-vestit__vestit--active");
	e = e || window.event;
	e.preventDefault();

	if(e.type == "touchstart"){
		dragX0 = e.touches[0].clientX;
	}
	else{
		dragX0 = e.clientX;
		document.onmousemove = dragAction;
		document.onmouseup = dragEnd;
	}
}

function dragAction(e){
	e = e || window.event;

	if(e.type == "touchmove"){
		dragX1 = dragX0 - e.touches[0].clientX;
		dragX0 = e.touches[0].clientX;
	}
	else{
		dragX1 = dragX0 - e.clientX;
		dragX0 = e.clientX;
	}
	//offset frames
	frameNumber = vestit.currentTime - dragX1 * speed;
}

function dragEnd(e){
	document.onmousemove = null;
	document.onmouseup = null;
	vestit.classList.remove("content-vestit__vestit--active");
}

function dragPlay(){
	if(frameNumber > totalFrames) frameNumber = totalFrames;
	else if(frameNumber < 0) frameNumber = 0;

	vestit.currentTime = frameNumber;
	window.requestAnimationFrame(dragPlay);
}

window.requestAnimationFrame(dragPlay);