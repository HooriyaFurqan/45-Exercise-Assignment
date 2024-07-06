"use strict";
/*If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes atleast 3 people you would like to invite to dinner then use your list to print a message to each person,inviting them to dinner.*/
//const myFriends: string[] = ["Zahara", "Alisha", "Faiza", "Kashmala", "Dua", "Soha"];
// 1st method (loop)
// for(let i = 0; i < myFriends.length; i++){
//     console.log(`Ms.${myFriends[i]} You're invited to my dinner on Monday\n`);
// }
//2nd method using map()
myFriends.map((ib) => {
    console.log(`Ms. ${ib}! You're invited to my dinner on Monday\n`);
});
