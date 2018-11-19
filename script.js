var color1= document.querySelector(".color1");
console.log(color1.value);

var color2 = document.querySelector(".color2");
console.log(color2.value);

var body=document.getElementById("gradient");
console.log(body.value);



function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);