/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

*/

//const myFriends: string [] = ["Zahara", "Alisha", "Faiza", "Kashmala"];
console.log(myFriends);
console.log(`We have 3 more friends to invite on dinner\n`);

// adding three more friends
// add at beginning
myFriends.unshift("Soha");
// ["Soha", "Zahara", "Alisha", "Faiza", "Kashmala"];
console.log(myFriends);

//add at middle
myFriends.splice(2, 0, "Dua Rashid");
console.log(myFriends);

//add at last
myFriends.push("Zainab");
console.log(myFriends);

// print all friends alongwith message

for(let i = 0; i < myFriends.length; i++){
    console.log(`Ms. ${myFriends[i]} You are invited to my dinner`);
    }



