

//sticky menu


window.onscroll = function() {myFunction()};
let menu = document.getElementById("menu");
let menu_list = document.querySelector(".menu_list");
let stick = menu.offsetTop;
function myFunction() {
    if (window.pageYOffset >= stick) {
      menu.classList.add("stick")
      menu_list.classList.add("position_down")
      menu_list.classList.remove("position");
    } else {
      menu.classList.remove("stick");
      menu_list.classList.remove("position_down");
      menu_list.classList.add("position");
    }
}


//picture animation


let modal = document.getElementById('myModal');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}




const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".menu_list");

hamburger.addEventListener("click", adoptMenu);

function adoptMenu() {
    hamburger.classList.toggle('active');
    nav.classList.toggle("active");
}

const link = document.querySelectorAll(".link");

link.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}