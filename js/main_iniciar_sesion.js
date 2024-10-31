 // Alterna entre los formularios de inicio y registro
 function toggleForm(formId) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById(formId).style.display = 'block';
}

// Maneja el inicio de sesión y redirige al archivo login.html
function loginUser(event) {
  event.preventDefault();
  window.location.href = 'software.html';
}
      
// Maneja el registro del usuario y muestra alerta
function registerUser(event) {
    event.preventDefault();
        // SweetAlert de Confirmación con redirección
        Swal.fire({
          title: '¿Estás seguro de registrarte?',
          text: 'Serás redirigido a la página de inicio de sesión.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, estoy seguro.'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Tu registro a sido exitoso...',
              '',
              'success'
            );
          }
        });  
    toggleForm('loginForm');
}

// Lógica del carrusel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

// Mostrar formulario de inicio al cargar la página
toggleForm('loginForm');