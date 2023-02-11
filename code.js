const logo = document.getElementById("blooren");
document.onscroll = function(){ 
    var pos = getVerticalScrollPercentage(document.body)
    if(pos>=95){
        // logo.style.color="blue";
        logo.innerHTML = "Blooren/>"
        logo.style.color="black";
      }else{
        logo.style.color="white";
        logo.innerHTML = "Blooren"
    }
  }

function getVerticalScrollPercentage(elm){
  var p = elm.parentNode;
  return(elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100;
}
