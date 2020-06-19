let menu = document.querySelector(".menu");
let navbar = document.querySelector(".header-center");
let close = document.createElement("img");
close.src = "/images/close.svg";
close.classList.add("close");

menu.addEventListener("click", function(e) {
  menu.parentNode.replaceChild(close, menu);
  if (e.target.className === "menu") {
    navbar.style.display = "block";
  } else if (e.target.className === "close") {
    navbar.style.display = "none";
  }
});

close.addEventListener("click", function(e) {
  if (e.target.className === "close") {
    navbar.style.display = "none";
    close.parentNode.replaceChild(menu, close);
  }
});
