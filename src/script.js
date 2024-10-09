// script.ts
document.addEventListener("DOMContentLoaded", function () {
    var agendeVisitaButton = document.getElementById("agende-visita");
    if (agendeVisitaButton) {
        // Aumenta o botão ao passar o mouse
        agendeVisitaButton.addEventListener("mouseenter", function () {
            agendeVisitaButton.style.transition = "transform 0.3s ease";
            agendeVisitaButton.style.transform = "scale(1.1)";
        });
        // Restaura o tamanho original ao sair com o mouse
        agendeVisitaButton.addEventListener("mouseleave", function () {
            agendeVisitaButton.style.transition = "transform 0.3s ease";
            agendeVisitaButton.style.transform = "scale(1)";
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var entrarContatoButton = document.getElementById("entrar-contato");
    if (entrarContatoButton) {
        // Aumenta o botão ao passar o mouse
        entrarContatoButton.addEventListener("mouseenter", function () {
            entrarContatoButton.style.transition = "transform 0.3s ease";
            entrarContatoButton.style.transform = "scale(1.1)";
        });
        // Restaura o tamanho original ao sair com o mouse
        entrarContatoButton.addEventListener("mouseleave", function () {
            entrarContatoButton.style.transition = "transform 0.3s ease";
            entrarContatoButton.style.transform = "scale(1)";
        });
    }
});
// Função para mostrar ou ocultar elementos ao rolar a página
function handleScroll() {
    var elements = document.querySelectorAll(".fade-in"); // Seleciona todos os elementos com a classe 'fade-in'
    var windowHeight = window.innerHeight;
    elements.forEach(function (element) {
        var elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight) {
            element.classList.add("visible"); // Adiciona a classe 'visible' se o elemento estiver na viewport
        }
        else {
            element.classList.remove("visible"); // Remove a classe 'visible' se o elemento não estiver na viewport
        }
    });
}
// Adiciona o evento de scroll
window.addEventListener("scroll", handleScroll);
// Chama a função no carregamento inicial
handleScroll();
