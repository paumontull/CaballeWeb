/* var stickyContainer = document.getElementById("sticky-container");
const sCDOMRect = stickyContainer.getBoundingClientRect();
window.onload = () => {
	if(stickyContainer != null & sCDOMRect.height > window.innerHeight) stickyContainer.style.top = window.innerHeight - sCDOMRect.height + "px";
}; */

var stickyContainer = document.querySelector(".landing-vestits__sticky");
var children = Array.from(stickyContainer.children);

window.onscroll = function(){
	if(document.body.scrollTop >= window.innerHeight || document.documentElement.scrollTop >= window.innerHeight){
		console.log("hey");
		children.forEach(child => {
			child.style.position = "fixed";
		});
	}
	else{
		children.forEach(child => {
			child.style.position = "absolute";
		});
	}
};