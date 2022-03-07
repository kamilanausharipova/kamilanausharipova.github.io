$("#form").click(function() {
   alert("The Form has been Submitted.");
});

$("#call").click(function() {
   alert("You are going to call!");
});

// $("#email").click(function() {
//    alert("You are going to send an email!");
// });
function change1() {
document.getElementById("pic").src = "../images/nextpic.png";
   }
   document.getElementById("em").addEventListener("keypress", function() {
     if (event.key === "Enter") {
         alert("Enter message!");
     }
   });
$("#pic").mouseout(function () {
    this.src= "../images/pic3.png"
});
// $("#em").keypress(function(event) {
//     if (event.key === "Enter") {
//         alert("Enter message!");
//     }
// });
function play() {
  var audio = new Audio("clicky.mp3");
  audio.play();
  audio.volume = 20;
}
function f() {
alert("You are going to send an email!");
   }
