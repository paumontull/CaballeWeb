const elements = document.querySelectorAll(".vertical-menu__element");

var selected = 2;
elements[selected].classList.add("vertical-menu__element--selected");

elements.forEach((value, i) =>{
	value.addEventListener("click", () =>{
		if(i == selected) return;

		elements[selected].classList.remove("vertical-menu__element--selected");
		value.classList.add("vertical-menu__element--selected");
		selected = i;
		//load i

		//document.querySelector("#v0 > source").src = "/video/Vestits_2.mp4";
		//document.getElementById("v0").load();
	});
	
	value.addEventListener("mouseenter", () =>{
		value.classList.add("vertical-menu__element--active");
	});

	value.addEventListener("mouseleave", () =>{
		value.classList.remove("vertical-menu__element--active");
	});
});