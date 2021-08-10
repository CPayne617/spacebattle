class spaceShip {
    constructor ( name, hull, firepower, accuracy ){
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  
}
// alien hull(health) minus user firepower
attack (enemy){
    // players hull(health) minus alien firepower
    if( this.accuracy > Math.random()){
        enemy.hull -= this.firepower
    }
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
    var alienTwo = new alienShips("alienThree");
    var alienFour = new alienShips("alienFour");
    var alienFive = new alienShips("alienFour");
    var alienSix = new alienShips("alienSix");

var alienShips = new Array("alienOne", "alienTwo", "alienThree", "alienFour", "alienFive", "alienSix");
alienShips.sort()

for(i=0; i<alienShips.length;i++){
    console.log(alienShips[i] + "<br/>");
}

    // const alienShips = ["alienOne", "alienTwo","alienThree", "alienFour", "alienFive", "alienSix" ];
    // let i = 0;
    // let len = alienShips.length;
    // let text = " ";

    // for (; i < len; ){
    //     text += alienShips[i] + "<br>";
    //     i++;
    // }
    // console.log(alienShips)

// starting game
let USS_SchwarzeneggerTurn
// const yourAnswer = prompt ("attack or run?", "attack or run");

// start the attack; player attcks aliens
USS_Schwarzenegger.attack(alienOne);
// check alien hull (health)
console.log(alienOne.hull, "Player attack")

if ( alienOne.hull > 0 ) { // if hull is greater than 0
    console.log("enemy turn!");

} else if( alienOne.hull <= 0 ){
    console.log("Another ship approcahes!!!");
}
    alienOne.attack(USS_Schwarzenegger);
    console.log(USS_Schwarzenegger.hull, "Alien attack!!!");
    
    if (USS_Schwarzenegger.hull > 0){
        USS_Schwarzenegger.attack(alienOne);
        console.log(alienOne.hull, "Player attack");
}



    // alienTwo.attack(USS_Schwarzenegger) // enemy turn
    // console.log(USS_Schwarzenegger.hull); // check player hull (health)




// else if ( USS_Schwarzenegger.attack(alienTwo)){
//         console.log(alienTwo.hull)
// }   
//     else ( USS_Schwarzenegger.hull > 0){ // player still has health
//         console.log("your turn!");

//         USS_Schwarzenegger.attack(alienOne);
// // check alien hull (health)
// console.log(alienOne.hull)
    // }
