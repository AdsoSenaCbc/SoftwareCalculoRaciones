// Variables globales
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const menuItems = document.querySelectorAll('.menu-item');
const contentSections = document.querySelectorAll('.content-section');

// Función para alternar el menú
function toggleSidebar() {
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('shifted');
    
    // Cambiar el ícono del botón de menú
    const menuIcon = menuToggle.querySelector('i');
    if (sidebar.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}

// Event listener para el botón de menú
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSidebar();
});

// Cerrar el menú cuando se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('active')) {
        toggleSidebar();
    }
});

// Manejar clics en los elementos del menú
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const sectionId = item.getAttribute('data-section');
        
        // Ocultar todas las secciones
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Mostrar la sección seleccionada
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }

        // En dispositivos móviles, cerrar el menú después de seleccionar
        if (window.innerWidth <= 768) {
            toggleSidebar();
        }
    });
});

// Manejar cambios de tamaño de ventana
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
        toggleSidebar();
    }
});

// JavaScript para manejar el menú desplegable
function toggleSubmenu(event) {
    const submenu = document.querySelector('.submenu');
    submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
}