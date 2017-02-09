function writeOk() {
  // Je récupère le div
  var counter = document.getElementById('counter');

  // J'écris dedans
  counter.textContent = 'OK';
}

// J'exécute la fonction writeOk dans 3000 ms
var timer = setTimeout(writeOk, 3000);

function stopTimer(){
	// J'annule le compte à rebours
	clearTimeout(timer);
}





// clearTimeout(timer);



// Je récupère mon bouton
var button = document.getElementById('button-stop');
// Je récupère mon formulaire
var form = document.getElementById('price-form');

// Je vais écouter le clic
button.addEventListener('click', stopTimer);

// On pose l'écouteur d'évenement
form.addEventListener('submit', addColor);
