const toggleBtn = document.querySelector(".navbar-toggler");
const collapseAbleNavbar = document.querySelector(".my-navbar-collapse");
const icon = document.querySelector(".navbar-toggler-icon");

function switchIcon() {
  const ariaExpanded = toggleBtn.getAttribute("aria-expanded");
  if (ariaExpanded === "true") {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-x");
  } else {
    icon.classList.remove("fa-x");
    icon.classList.add("fa-bars");
  }
}

toggleBtn.addEventListener("click", switchIcon);
