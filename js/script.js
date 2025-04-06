let slideIndex = 0;

// Função para exibir o slide seguinte ou anterior
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Função para exibir o slide correto
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0; // Se alcançar o último, volta para o primeiro
    }
    if (n < 0) {
        slideIndex = slides.length - 1; // Se for o primeiro, vai para o último
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Esconde todos os slides
    }
    slides[slideIndex].style.display = "block";  // Exibe o slide atual
}

// Inicializa o slideshow
showSlides(slideIndex);

// Adiciona a funcionalidade automática de transição
setInterval(function() {
    plusSlides(1);
}, 5000);  // Troca de slide a cada 5 segundos
