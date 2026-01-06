// ===============================
// Exercise collapsibles
// ===============================
document.addEventListener("click", function (e) {
  const exerciseBtn = e.target.closest(".collapsible");
  if (!exerciseBtn) return;

  exerciseBtn.classList.toggle("active");

  const content = exerciseBtn.nextElementSibling;
  if (!content) return;

  content.style.display =
    content.style.display === "block" ? "none" : "block";
});

// ===============================
// Sidebar accordion navigation
// ===============================
document.addEventListener("click", function (e) {
  const navHeader = e.target.closest(".nav-header");
  if (!navHeader) return;

  navHeader.parentElement.classList.toggle("open");
});

