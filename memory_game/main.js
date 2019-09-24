
// console.log("Up and running!");

 let cards = [{rank: " queen", suit: "heart", cardImage:"images/queen-of-hearts.png"} , {rank: "queen" ,suit:"diamonds" ,cardImage: "images/queen-of-diamonds.png"}, {rank: "king" ,suit:"heart" ,cardImage:"images/king-of-hearts.png"}, {rank: "king" ,suit:"diamonds" ,cardImage:"images/king-of-diamonds.png"}];
 let cardsInPlay = [];
 function checkForMatch()
 {
 	if (cardsInPlay[0]=== cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  alertß("Sorry, try again.");
}
 }

 function filpCard(cardId){
 	cardsInPlay.push(cards[cardId]);
 	console.log( "User flipped " + cards[cardId].rank);
 	console.log( cards[cardId].suit);
 	console.log( cards[cardId].cardImage);

 if(cardsInPlay.length===2)
  {
     checkForMatch();
  
  }
}
filpCard(0);
filpCard(2);