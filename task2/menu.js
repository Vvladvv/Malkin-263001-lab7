const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header_list");

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