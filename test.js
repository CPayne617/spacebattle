//    let turn = 0;
//    const interval = setInterval (() => {
//     console.clear();
//     console.log('turn' + turn);
//     attack();

//     if (alienShips.every(({hull}) => hull <= 0)){
//         clearInterval(interval);
//         console.log('done');
//     } 
//     spaceShip
//     .filter(({attack}) => turn % attack === 0)
//     .forEach (spaceShipattack);

//     turn++;
//    }, 1000);
  
//     function spaceShip(){
//         console.log("player attacking...")
//     }
// function alienShips(){
//     console.log("enemy.attacking...")
// }
// }
// var alienOne = new alienShips("alienOne");
//     console.log(alienOne)
    
//     function doSomething(str){
//         alert( "string argument: " +arguments[0] );
//     }
//     doSomething("Hello");

    // class alienShips {
    //     constructor( name, hull, firepower, accuracy ){
    //         this.name = name;
    //         this.hull = Math.floor(Math.random() * 4) + 3;
    //         this.firepower = Math.floor(Math.random() * 3) + 2;
    //         this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10
    //     }
    var shipArr = []
    for ( let i =1; i<=6; i++){
    
        let shipHull = Math.floor( Math.random() *4 ) +3;
        let shipaccuracy = Math.floor ( Math.random() *3) + 6 / 10;
        let shipfirepower = Math.floor( Math.random () *3 ) +2;
    
        let Ship = new ship("Alien_Ship", shipHull,  shipfirepower,  shipaccuracy, );
    
        shipArr.push(Ship) ;
    }
    console.log(shipArr);