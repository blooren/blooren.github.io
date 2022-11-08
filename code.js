const logo = document.getElementById("blooren");
document.onscroll = function(){ 
    var pos = getVerticalScrollPercentage(document.body)
    if(pos>=80){
        // logo.style.color="blue";
        logo.innerHTML = "Blooren/>"
    }else{
        logo.style.color="#a3363d";
        logo.innerHTML = "Blooren"
    }
  }

function getVerticalScrollPercentage(elm){
  var p = elm.parentNode;
  return(elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100;
}
