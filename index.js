  var image = document.getElementById("pic");


  image.addEventListener('mouseover', function(){
    document.getElementById("pic").src = "images/hat2.png";
    image.src = "images/hat2.png"
  })
  image.addEventListener('mouseout', function(){
      image.src = "images/pic1.png"
    })
