const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuToggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.textContent = "☰";
}));

document.getElementById("year").textContent = new Date().getFullYear();

// Replace with your gym's official email address.
const gymEmail = "hello@example.com";
document.getElementById("contactLink").href = `mailto:${gymEmail}`;
