


hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
}


let overlay = document.getElementById("overlay");
let overlay1 = document.getElementById("overlay1");
let overlay2 = document.getElementById("overlay2");
function on() {
  overlay.style.display = "block";
}
function off() {
  overlay.style.display = "none";
}
function on1() {
 overlay1.style.display = "block";
}

function off1() {
 overlay1.style.display = "none";
}
function on2() {
  overlay2.style.display = "block";
}

function off2() {
overlay2.style.display = "none";
}
let tinapay = document.getElementById("close")
tinapay.onclick = function() {
  overlay.style.display = "none";
}

 function halaman112() {
  overlay1.style.display = "none";
}
function closewatson() {
  overlay2.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == overlay) {
    overlay.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == overlay1) {
    overlay1.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == overlay2) {
    overlay2.style.display = "none";
  }
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
 