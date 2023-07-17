


hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
}
function on() {
  document.getElementById("overlay").style.display = "block";
}
function off() {
  document.getElementById("overlay").style.display = "none";
}
function on1() {
  document.getElementById("overlay1").style.display = "block";
}

function off1() {
  document.getElementById("overlay1").style.display = "none";
}
function on2() {
  document.getElementById("overlay2").style.display = "block";
}

function off2() {
  document.getElementById("overlay2").style.display = "none";
}
function enlargeImage(image) {
    var enlargedImage = document.createElement('img');
    enlargedImage.src = image.src;
    enlargedImage.classList.add('enlarged-image');
    enlargedImage.onclick = function() {
      document.body.removeChild(this);
    };
    document.body.appendChild(enlargedImage);
  }

  let mybutton = document.getElementById("myBtn");

  window.onscroll = function() {scrollFunction()};
