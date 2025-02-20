// Mobile menu toggle
document.getElementById("menuToggle").addEventListener("click", function () {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
});
// Toggle Module Function
function toggleModule(moduleNumber) {
  const allModules = document.querySelectorAll("[id^='module-']");
  const allIcons = document.querySelectorAll("button i");

  allModules.forEach((module, index) => {
    const icon = allIcons[index];
    const isCurrent = index + 1 === moduleNumber;

    if (isCurrent) {
      const isHidden = module.classList.contains("hidden");
      module.classList.toggle("hidden", !isHidden);
      icon.classList.toggle("fa-chevron-down", !isHidden);
      icon.classList.toggle("fa-chevron-up", isHidden);
    } else {
      module.classList.add("hidden");
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
    }
  });
}

// FAQ Accordion
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector("button");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".icon");

    button.addEventListener("click", () => {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.querySelector(".faq-answer").classList.add("hidden");
          otherItem
            .querySelector(".icon")
            .classList.replace("fa-chevron-up", "fa-chevron-down");
        }
      });

      // تبديل الحالة للسؤال الحالي
      const isOpen = !answer.classList.contains("hidden");
      answer.classList.toggle("hidden");
      icon.classList.toggle("fa-chevron-down");
      icon.classList.toggle("fa-chevron-up");
    });
  });
});
// Current year
document.getElementById("year").textContent = new Date().getFullYear();
