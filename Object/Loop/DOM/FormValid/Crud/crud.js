var prompt = require('prompt-sync')();
// let age=prompt("Enter your age");
// if(age<18){
//     console.log("Your not eligible for vote")
// }
// else{

//     console.log("Your eligible for vote")
// }

//Q1 CONDITIONAL STATMENTS


// let age=prompt(" Enter your age for Movie tickets and get discount ");

// if(age<18){

//     console.log("you get 20% discount")
// }
// else if(age>18&&age<=65){
// console.log("Normal price")
// }
// else{
//     console.log("you get 30% discount")
// }

//Q2  Array

let guestlist=["sachin","rahul","prem","vikash","ram"];
 
 let fguest=prompt("Enter the guest name and check list ")

if(guestlist.includes(fguest.toLocaleLowerCase())){
    console.log("Welcome the party "+fguest)
}
else{

    console.log("Sorry you are not the guest list")
}


