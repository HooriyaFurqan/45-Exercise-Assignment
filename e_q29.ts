/* Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

*/

import { log } from "console";

 let favouriteFruits = ["Apple","Banana", "Orange"];
// if(favouriteFruits.includes("Mango")){
//     console.log(`I would like to eat Mango`);
// }else if(favouriteFruits.includes("Apple")){
//     console.log(`I would like to eat Apple`);
// }else{
//     console.log(`Fruits are not available`);
// }

let fruitAvailable = "Orange";
if(favouriteFruits.includes(fruitAvailable)){
 console.log(`I would like to eat ${fruitAvailable} `);
}else{
    console.log(`Fruits are not available!`);
}