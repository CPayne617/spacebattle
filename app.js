 alert("Game Time")
    
    
// create a Spaceship with it required values to input
class spaceShip {
    constructor ( name, hull, firepower, accuracy ){
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  
}
// alien hull(health) minus user firepower
attack(enemy){
    enemy.hull -= this.firepower;
}
}
// create user ship
var USS_Schwarzenegger = new spaceShip("USS Schwarzenegger", 20, 5, .7 );
// console.log user ship attributes
console.log(USS_Schwarzenegger)



// make alien class of ships use Math.random to make alien attacks random
class alienShips {
    constructor( name, hull, firepower, accuracy ){
        this.name = name;
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10
    }
    attack (enemy){
        // players hull(health) minus alien firepower
      if( this.accuracy > Math.random()){
          enemy.hull -= this.firepower
          
      }
      
         }


}

 var alienOne = new alienShips("alienOne");
    console.log(alienOne)
    // create the rest of alien fleet
    var alienTwo = new alienShips("alienTwo");
    var alienTwo = new alienShips("alienTwo");
    var alienFour = new alienShips("alienFour");
    var alienFive = new alienShips("alienFive");
    var alienSix = new alienShips("alienSix");

var Choice = prompt("Enemy ship is approcahing", "Attack or Flee?");

if (Choice === "Attack"){



// starting game
let USS_SchwarzeneggerTurn
// const yourAnswer = prompt ("attack or run?", "attack or run");

// start the attack; player attcks aliens
USS_Schwarzenegger.attack(alienOne);
// check alien hull (health)
console.log(alienOne.hull)
if ( alienOne.hull > 0 ) { // if hull is greater than 0
    console.log("enemy turn!");
    alienOne.attack(USS_Schwarzenegger); // enemy turn
    console.log(USS_Schwarzenegger.hull); // check player hull (health)
    if( alienOne.hull <= 0 ){
        alert("Another alien ship is approcahing!!!");
        var Choice2 = prompt("What do you want to do?","Attack or Flee?");
        if (Choice2 === "Attack"){
            USS_Schwarzenegger.attack(alienOne);
        console.log(alienOne.hull);
         } else { Choice3 === "Flee";
            console.log("Game Over");
        }
    }
    if ( USS_Schwarzenegger.hull > 0){ // player still has health
        console.log("your turn!");
    }
        var Choice3 = prompt("What do you want to do?","Attack or Flee?");
        if (Choice3 === "Attack"){
        USS_Schwarzenegger.attack(alienOne);
        console.log(alienOne.hull);
         if ( Choice3 === "Flee");
            console.log("Game Over");
         
        if ( alienOne.hull <= 0 ){
           alert("Another alien ship is approcahing!!!");
           var Choice4 = prompt("What do you want to do?","Attack or Flee?");
           if ( Choice4 === "Attack"){
            USS_Schwarzenegger.attack(alienTwo)
            console.log(alienTwo.hull);
           }
        }
    }

}
 
}
// else{
//     console.log("Game over!")
// }
// else ( enemy.hull <= 0 ) {
//     console.log("you win");
// }

// if(alienShips.hull > 0 ){
//     alienShips.attack(spaceShips);
//     console.log(USS_Schwarzenegger.hull)
    
// }

    

    
// swapTurns()

// function swapTurns(){
//     spaceShipTurn = !alienShipsTurn
// }