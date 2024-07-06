"use strict";
/* Think of your favourite mode of transportation,such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as "I would lie to own a Honda motorcycle."*/
//const myTrans: string [] = ["Car", "Bike", "Bus"];
// 1st method (loop)
// for(let i = 0; i < myTrans.length; i++){
//     console.log(`I would like to own a ${myTrans[i]}`);
//}
// 2nd method
const myTrans = ["Car", "Bike", "Bus"];
myTrans.map((ib) => {
    console.log(`I would like to own a ${ib}`);
});
