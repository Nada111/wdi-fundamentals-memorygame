
// console.log("Up and running!");

 let cards = ["queen" , "queen", " king" , " king"];
 let cardsInPlay = [];
 function checkForMatch(){
 	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
 }

 function filpCard( cardId){
 	console.log( "User flipped " + cards[cardId]);
 	cardsInPlay.push(cards[cardId]);

 if(cardsInPlay.length===2);
  {
     checkForMatch();
  
  }
}
filpCard(0);
filpCard(2);