// logo.style.color = "blue";
const logo = document.getElementById("blooren");
const sticky = logo.offsetTop;

function changeColor(){
    logo.style.color = "blue", "white";
}

function verticalStatus(){
    console.log(window.pageYOffset);
}

function myFunction() {
    if (window.pageYOffset <= 0) {
    logo.style.color="red"
    logo.innerHTML = "Blooren"
} else {
    logo.style.color="blue";
    logo.innerHTML = "Blooren/>"
    }
  }