var bid = {
  /*
   * Properties
   */
  seconds: 10,
  maxBid: 0,

  /*
   * Init
   */
  init: function() {
    //console.info('bid.init');

    // Au bout d'une seconde, décremente-moi le compteur
    // setTimeout(bid.decrement, 1000);
    // Toutes les secondes, décremente-moi le compteur
    setInterval(bid.decrement, 1000);


    // On écoute la soumission du formulaire
		var buttonOk = document.getElementById('ok');

		buttonOk.addEventListener('click', bid.submit);
  },

	// Stopper le timer
	stopTimer: function() {
	//  console.info('stopTimer');

	  // Avec clearTimeout, on peut arrêter le compte à rebours
	  clearTimeout(timer);
	},

  /*
   * On décrémente
   */
  decrement: function() {

		if(bid.seconds>0){
			bid.seconds--;
		}
		else {
			alert("L'enchère est terminée !");
		}

		  // Counter
	    var counter = document.getElementById('counter');
	    counter.textContent = bid.seconds;
  },

  /*
   * Submit
   */
  submit: function(event) {
    // On arrête le comportement par défaut
  	// pour éviter le rechargement de la page
  	event.preventDefault();

  	// Je récupére l'input
  	var bidBest = document.getElementById('amount');
		var value = parseInt(bidBest.value, 10);
		var change = document.getElementById('bid-best');

    // Est-ce supérieur à l'enchère en cours ?
		if( value > bid.maxBid){
				// Cette valeur devient l'enchère principal
				bid.maxBid = value;
				// On met à jour le DOM
				change.textContent = bid.maxBid;
				// On remet le compteur à 0
				bid.seconds = 11;
		}

  }
};

document.addEventListener('DOMContentLoaded', bid.init);
