// ==================================
// MENÚ HAMBURGUESA (MÓVIL)
// ==================================

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menu-toggle');
  var nav = document.querySelector('header nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('activo');
      nav.classList.toggle('aberto');
    });

    // Cerrar menú al hacer clic en un enlace
    var enlaces = nav.querySelectorAll('a');
    enlaces.forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('activo');
        nav.classList.remove('aberto');
      });
    });
  }
});

// ==================================
// FORMULARIO DE CONTACTO
// ==================================

function enviarFormulario(evento) {
  evento.preventDefault();

  var nombre   = document.getElementById('nombre').value;
  var email    = document.getElementById('email').value;
  var terminos = document.getElementById('terminos').checked;

  if (nombre === '' || email === '') {
    alert('Por favor, completa tu nombre y correo electrónico.');
    return;
  }

  if (!terminos) {
    alert('Debes aceptar los términos y condiciones para continuar.');
    return;
  }

  document.getElementById('mensaje-exito').style.display = 'block';
  document.getElementById('formulario').reset();
}
