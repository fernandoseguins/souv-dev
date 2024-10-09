// script.ts
document.addEventListener("DOMContentLoaded", function () {
    var agendeVisitaButton = document.getElementById("agende-visita");
    if (agendeVisitaButton) {

        agendeVisitaButton.addEventListener("mouseenter", function () {
            agendeVisitaButton.style.transition = "transform 0.3s ease";
            agendeVisitaButton.style.transform = "scale(1.1)";
        });

        agendeVisitaButton.addEventListener("mouseleave", function () {
            agendeVisitaButton.style.transition = "transform 0.3s ease";
            agendeVisitaButton.style.transform = "scale(1)";
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var entrarContatoButton = document.getElementById("entrar-contato");
    if (entrarContatoButton) {

        entrarContatoButton.addEventListener("mouseenter", function () {
            entrarContatoButton.style.transition = "transform 0.3s ease";
            entrarContatoButton.style.transform = "scale(1.1)";
        });
        entrarContatoButton.addEventListener("mouseleave", function () {
            entrarContatoButton.style.transition = "transform 0.3s ease";
            entrarContatoButton.style.transform = "scale(1)";
        });
    }
});

function handleScroll() {
    var elements = document.querySelectorAll(".fade-in");
    var windowHeight = window.innerHeight;
    elements.forEach(function (element) {
        var elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight) {
            element.classList.add("visible"); 
        }
        else {
            element.classList.remove("visible");
        }
    });
}

window.addEventListener("scroll", handleScroll);
handleScroll();

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});