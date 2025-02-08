// Auto-update footer year
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.createElement("span");
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector("footer p").appendChild(yearSpan);
});

// Show an alert when user clicks 'Contribute Sewa' button
function contributeSewa() {
    alert("ਧੰਨਵਾਦ! ਤੁਹਾਡੀ ਸੇਵਾ ਗ੍ਰਹਣ ਕਰ ਲਈ ਗਈ ਹੈ।");
}

// Highlight active menu link
document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();
    let menuLinks = document.querySelectorAll("nav ul li a");

    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});