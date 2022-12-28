function onMenuClick() {
  var navbar = document.getElementById("navigation-bar");
  var responsive_class_name = "responsive";
  var btn = document.getElementById("menu-icon");
  var navheader = document.getElementById("nav-header");
  navbar.classList.toggle(responsive_class_name);
  navheader.classList.toggle("active");
}

window.addEventListener("scroll", function () {
  var scrollY = window.scrollY;
  if (scrollY > 100) {
    var navHeader = document.getElementById("nav-header");
    navHeader.classList.add("scrolled");
  } else {
    var navHeader = document.getElementById("nav-header");
    navHeader.classList.remove("scrolled");
  }
});
