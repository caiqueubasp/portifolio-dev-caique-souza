const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");
const vanillaList = document.querySelectorAll("#vanilla-js-list");
const container = document.getElementsByClassName("container");
const contactMe = document.getElementById("contact-me");
console.log(vanillaList);

function openGitHub() {
  var url = "https://github.com/caiqueubasp";

  window.open(url);
}

// Toggle nav
toggle.addEventListener("click", () => document.body.classList.toggle("show-nav"));

// Shpw modal
contactMe.addEventListener("click", () => modal.classList.add("show-modal"));

// Open Git Hub
open.addEventListener("click", openGitHub);

// Hide Modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", (e) => (e.target == modal ? modal.classList.remove("show-modal") : false));
