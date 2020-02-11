var css =  document.querySelector("h3");  
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//in order to ensure clean code and not repaeting the same code, I have to wrap the codes in a function.
function setGradient() {
    body.style.background = 
    "Linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

 

//to test
/*color1.addEventListener("input", function(){
    console.log(color1.value);
})

color2.addEventListener("input", function(){
    console.log(color2.value);
})*/