// BridgePoint interactivity – minimal & sleek

// Smooth scroll for buttons
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(".connect");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Tiny greeting effect
window.addEventListener("load", () => {
  const header = document.querySelector("header h1");
  if (header) {
    header.style.transition = "transform 0.6s ease, opacity 0.6s ease";
    header.style.transform = "translateY(0)";
    header.style.opacity = "1";
  }
});