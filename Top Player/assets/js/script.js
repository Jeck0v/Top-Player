const audio = document.getElementById('monAudio');
const volumeControl = document.getElementById('volumeControl');

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}

volumeControl.addEventListener('input', () => {
  audio.volume = volumeControl.value;
});


// Sélection de l'élément à copier
var slideElement = document.querySelector(".slide");

// Sélection de l'élément où les copies seront ajoutées
var topPageElement = document.querySelector('.top-page');

// Nombre de copies à créer
var nombreDeCopies = 3; // Vous pouvez changer ce nombre selon vos besoins

for (var i = 0; i < nombreDeCopies; i++) {
    // Cloner l'élément avec la classe "slide"
    var copy = slideElement.cloneNode(true);
    
    // Ajouter la copie à l'élément avec la classe "top-page"
    topPageElement.appendChild(copy);
}