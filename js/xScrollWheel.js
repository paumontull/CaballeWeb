var container = document.querySelector(".content-colleccio"),
	increment = 100;

container.addEventListener("wheel", e =>{
	container.scrollLeft += (e.deltaY > 0) ? increment : -increment;
	e.preventDefault();
});