const toggleButton = document.getElementById("b_menu");
const content = document.getElementById("menu-mobile");

toggleButton.addEventListener("click", function() {
  content.classList.toggle("hidden");
});
