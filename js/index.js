var cards = document.querySelectorAll(".card-container li.card");
var width = Math.round(80 / cards.length);
if (window.width > 700){
cards.forEach((card) => {
card.style.width = width + "%";
})
}
else{
	cards.forEach((card) => {
card.style.marginTop = "1em";
card.style.marginBottom = "1em";

})
}



function CalculHeight() {
carrousel_height = document.getElementsByClassName('carrousel_photo')[0].offsetHeight;
document.getElementById("carrousel").style.height = carrousel_height + "px";
console.log("resize fired")
}
 

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName('carrousel_photo');
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {
slideIndex = 1
}
if (n < 1) {
slideIndex = slides.length
}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}
CalculHeight();
window.addEventListener("resize", CalculHeight);
document.getElementById("button_carrousel_prev").addEventListener("click", () => {
plusSlides(-1)
});
document.getElementById("button_carrousel_next").addEventListener("click", () => {
plusSlides(1)
});
document.querySelectorAll(".dot").forEach((d, index) => {
d.addEventListener("click", () => {
currentSlide(index + 1)
});
console.log(index);
});

document.getElementById("button_menu").addEventListener("click",() => {
	console.log("menu fired")
	let menu = document.querySelector(".header-nav ul")
	menu.style.visibility= menu.style.visibility == "visible"  ? "hidden": "visible";
})