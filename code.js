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
    if (window.pageYOffset <= 96) {
    logo.style.color="#a3363d"
    logo.innerHTML = "Blooren"
} else {
    logo.style.color="blue";
    logo.innerHTML = "Blooren/>"
    }
  }