$(document).ready(function() {
    // Comprobar si el modo oscuro está activado en el almacenamiento local
    var modooscuro = localStorage.getItem('modooscuro');
    if (modooscuro === 'true') {
      $('html').attr('data-bs-theme', 'dark');
      $('#darkmode').attr('disabled', true);
    }

    // Comprobar si el modo claro está activado en el almacenamiento local
    var modoclaro = localStorage.getItem('modoclaro');
    if (modoclaro === 'true') {
      $('html').removeAttr('data-bs-theme');
      $('#lightmode').attr('disabled', true);
    }

    // Agregar evento de clic al botón de modo oscuro
    $('#darkmode').click(function() {
      $('html').attr('data-bs-theme', 'dark');
      localStorage.setItem('modooscuro', 'true');
      localStorage.setItem('modoclaro', 'false');
      $('#darkmode').attr('disabled', true);
      $('#lightmode').removeAttr('disabled');
    });

    // Agregar evento de clic al botón de modo claro
    $('#lightmode').click(function() {
      $('html').removeAttr('data-bs-theme');
      localStorage.setItem('modooscuro', 'false');
      localStorage.setItem('modoclaro', 'true');
      $('#lightmode').attr('disabled', true);
      $('#darkmode').removeAttr('disabled');
    });
  });

// Esto lo separo del resto porque patata.

  $(document).keydown(function(event) {
    if (event.keyCode === 27) { // "27" es el código de tecla para "Escape"
      $('#OffCanvasDigimon').offcanvas('hide');
    }
  });