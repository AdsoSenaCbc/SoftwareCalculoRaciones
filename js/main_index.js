 // Inicializar AOS
 AOS.init({
    duration: 1000,
    once: true
});

// Funcionalidad del carrusel
const carousel = document.querySelector('.carousel-inner');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
const slideCount = document.querySelectorAll('.carousel-item').length;

function goToSlide(n) {
    currentSlide = (n + slideCount) % slideCount;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Eventos click para los indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index));
});

// Cambio automático de diapositivas con pausa al hover
// Función para cambiar de diapositiva
function goToSlide(n) {
currentSlide = (n + slideCount) % slideCount;
carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

// Actualizar indicadores
indicators.forEach((indicator, index) => {
indicator.classList.toggle('active', index === currentSlide);
});
}

// Agregar eventos click a los indicadores
indicators.forEach((indicator, index) => {
indicator.addEventListener('click', () => goToSlide(index));
});

// Cambio automático de diapositivas
setInterval(() => {
goToSlide(currentSlide + 1);
}, 5000);