function writeOk() {
  // Je récupère le div
  var counter = document.getElementById('counter');

  // J'écris dedans
  counter.textContent = 'OK';
}

// J'exécute la fonction writeOk dans 3000 ms
setTimeout(writeOk, 3000);
