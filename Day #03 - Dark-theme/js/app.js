let icon = document.getElementById('icon');

icon.addEventListener('click', () => {
  document.body.classList.toggle("dark-theme");
  
  if(document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
});