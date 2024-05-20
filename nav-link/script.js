document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const containers = document.querySelectorAll(".content-container");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const page = event.target.getAttribute("data-content");
      changeContent(page);
    });
  });

  function changeContent(page) {
    containers.forEach((container) => {
      if (container.id === page) {
        container.classList.add("active");
      } else {
        container.classList.remove("active");
      }
    });
  }
});
