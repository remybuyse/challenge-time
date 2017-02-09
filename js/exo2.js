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
    console.info('bid.init');

    // Au bout d'une seconde, décremente-moi le compteur
    setTimeout(bid.decrement, 1000);

    // Toutes les secondes, décremente-moi le compteur
    // setInterval(bid.decrement, 1000);

    // On écoute la soumission du formulaire
  },

  /*
   * On décrémente
   */
  decrement: function() {
    bid.seconds--;

    // Counter
    var counter = document.getElementById('counter');
    counter.textContent = bid.seconds;

    // On refait ?
    if (bid.seconds > 0) {
      setTimeout(bid.decrement, 1000);
    }
  }

  /*
   * Submit
   */
  submit: function() {
    // On récupère la valeur de l'input

    // Est-ce supérieur à l'enchère en cours ?

      // Cette valeur devient l'enchère principal

      // On met à jour le DOM

      // On remet le compteur à 0
  }
};

document.addEventListener('DOMContentLoaded', bid.init);
