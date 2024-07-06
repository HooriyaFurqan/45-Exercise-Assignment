"use strict";
/* Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

*/
// function make_shirt(size: string, label: string){
//     return size + label 
// }
// let myFunction = make_shirt("Large", " I love TypeScript ");
// console.log(myFunction);
// making large as default
// function make_shirt(label: string, size: string = "Large"){
//     return size + label
// }
// let myFunction = make_shirt( " I love TypeScript ");
// console.log(myFunction);
// making large as default
// making medium as default
// function make_shirt(label: string, size: string = "Medium"){
//     return size + label
// }
// let myFunction = make_shirt( " I love TypeScript ");
// console.log(myFunction);
// making shirt of any size
function make_shirt(label, size) {
    return size + label;
}
let myFunction = make_shirt("Any size", " I love TypeScript ");
console.log(myFunction);
