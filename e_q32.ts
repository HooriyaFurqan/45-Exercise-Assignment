/*  Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

*/

import { log } from "console";

let current_users = ["Ali", "madaD", "Ayaz", "Fayaz", "Hussain", "Tariq", "Yasir"];
let new_users = ["Ahmed", "Manzoor", "Madad", "Hadad", "ayaz"];
// we will use forEach method
new_users.forEach(new_users =>{
    let new_userLower = new_users.toLowerCase();
    // we will use some() method
let usernameTaken = current_users.some(current_users => current_users.toLowerCase() === new_userLower); // true or false
// now we will apply conditions
if(usernameTaken){
    console.log(`${new_users} Needs to choose a new username because it's already takem`);
}else{
    console.log(`${new_users} Is the new member added`);
    current_users.push(new_users)        // add new user to current users array; 
}
})

console.log(current_users);