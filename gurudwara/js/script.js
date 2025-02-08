// ✅ 1. Display a welcome message in the console
console.log("Welcome to Gurudwara Singh Sabha Website!");

// ✅ 2. Smooth scrolling for all anchor links
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

// ✅ 3. Show a pop-up confirmation when leaving the page
window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    event.returnValue = "Are you sure you want to leave?";
});