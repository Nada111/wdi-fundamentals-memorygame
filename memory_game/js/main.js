
// console.log("Up and running!");

 let cards = [{rank: " queen", suit: "heart", cardImage:"images/queen-of-hearts.png"} , {rank: "queen" ,suit:"diamonds" ,cardImage: "images/queen-of-diamonds.png"}, {rank: "king" ,suit:"heart" ,cardImage:"images/king-of-hearts.png"}, {rank: "king" ,suit:"diamonds" ,cardImage:"images/king-of-diamonds.png"}];
 let cardsInPlay = [];
 function checkForMatch()
 {
 	if (cardsInPlay[0]=== cardsInPlay[1]) {
  console.log("You found a match!");
} 
else {
  ale("Sorry, try again.");
}
 }


 var filpCard = function (){
   var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId]);
  console.log( "User flipped " + cards[cardId].rank);
  console.log( cards[cardId].suit);
  console.log( cards[cardId].cardImage);
  this.setAttribute('scr', cards[cardId].cardImage);



 if(cardsInPlay.length===2)
  {
     checkForMatch();
  
  }
};

function createBoard()
 {
 	for (var i = 0; i < cards.length; i++) {

    var cardElement = document.createElement('img');
    cardElement.setAttribute('img', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', filpCard);
    document.getElementById('game-board').appendChild(cardElement);  
}

 } 
createBoard();