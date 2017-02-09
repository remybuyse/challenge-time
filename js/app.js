function writeOk() {
  console.info('writeOk');

  // Je récupère le div
  var counter = document.getElementById('counter');

  // J'écris dedans
  counter.textContent = 'OK';
}

// J'exécute la fonction writeOk dans 3000 ms
var timer = setTimeout(writeOk, 3000);

// Stopper le timer
function stopTimer() {
  console.info('stopTimer');

  // Avec clearTimeout, on peut arrêter le compte à rebours
  clearTimeout(timer);
}

// Je récupère mon bouton
var button = document.getElementById('stop');

// J'écoute le clic
button.addEventListener('click', stopTimer);
