var siteMenu = document.querySelector(".site-menu");
var imgMenuItems = document.querySelectorAll(".img-menu__item");

var loadContent = function loadContent(content){
	var htmlContent,
		selectedImgMenuItem;

	if(content.startsWith("v")){
		//handle vestit
		htmlContent = "content/vestits/" + content + ".html";
		selectedImgMenuItem = parseInt(content[1]);
	}
	else if(content.startsWith("about-")){
		htmlContent = "content/about/" + content + ".html";
	}
	else if(content === "col.leccio"){
		htmlContent = "content/" + content + ".html";
		selectedImgMenuItem = 8;
	}

	imgMenuItems.forEach((item, i) => {
		if(i === selectedImgMenuItem){
			item.classList.add("img-menu__item--active");
		}
		else item.classList.remove("img-menu__item--active");
	});

	$("#container").load(htmlContent);
}

var changeState = function changeState(content){
	const state = {"content": 1};
	const title = "";
	const url = "main.html?content=" + content;

	history.pushState(state, title, url);
	loadContent(content);
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

var urlContent = getUrlParameter("content");

$(document).ready(function(){
	loadContent(urlContent);
});

imgMenuItems.forEach((item, i) => {
	item.addEventListener("click", ()=>{
		item.style.animationDelay = "0s";
		if(item.classList.contains("site-menu-toggle")){
			var children = item.children;
			children[1].classList.toggle("hamburger--active");
			siteMenu.classList.toggle("site-menu--active")
		}
		else if(i < 8){
			changeState("v" + i);
		}
		else{
			changeState("col.leccio");
		}
	})
});