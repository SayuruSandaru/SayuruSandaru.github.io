function onMenuClick() {
  var navbar = document.getElementById("navigation-bar");
  var responsive_class_name = "responsive";
  var btn = document.getElementById("menu-icon");
  var navheader = document.getElementById("nav-header");
  navbar.classList.toggle(responsive_class_name);
  navheader.classList.toggle("active");
}
