$("#call").click(function() {
   alert("You are going to call!");
});

$("#email").click(function() {
   alert("You are going to send an email!");
});
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function play() {
  var audio = new Audio("../main/clicky.mp3");
  audio.play();
}
