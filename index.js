

    $("#pic").mouseover(function () {
       this.src= "images/hat2.png"
    }).mouseout(function () {
        this.src= "images/pic1.png"
    });
    function play() {
      var audio = new Audio("clicky.mp3");
      audio.play();
    }
