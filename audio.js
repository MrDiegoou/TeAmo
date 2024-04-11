$(document).ready(function() {
  // Animar contenido
  $('.spidey').addClass('animate_content');
  $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();

  setTimeout(function() {
    $('.spidey').removeClass('animate_content');
  }, 3200);

  // Quitar clase fadeIn después de 1500ms
  setTimeout(function() {
    $('.spidey').removeClass('fadeIn');
  }, 1100);

  // Reproducir audio automáticamente después de un retraso
  setTimeout(function() {
    PuterLagu();
  }, 3000); // Cambia el valor 3000 a la cantidad de milisegundos que deseas esperar antes de iniciar la reproducción
});

// Función para reproducir o pausar el audio
function PuterLagu() {
  var audio = document.getElementById("miAudio");
  audio.play();
}
