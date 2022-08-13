// console.log("Hello from external JavaScript")
// alert("Welcome to my website!")
//
// let favoriteColor = prompt("What is your favorite color?")
// if (favoriteColor){
//     alert("Great, " + favoriteColor + " is my favorite color too!")
//     }
//
//  //*************EXERCISE 3*************
//  //SCENARIO 1
// let daysOfLittleMermaind = prompt("how many days did you rent little Mermaid");
// let daysOfBrotherBear = prompt("how many days of brother bear")
// let daysOfHercules = prompt ("how many days of Hercules ")
//
// let totalCost = (daysOfLittleMermaind * 3 ) + (daysOfBrotherBear * 3) + (daysOfHercules * 3);
//     alert(totalCost +" Dollars is your total cost");
//
// //SCENARIO 2
// let hoursAtGoogle = prompt("How many hours did you work at google");
// let payAtGoogle = prompt ("what is your hourly rate at google?");
// let hoursAtAmazon = prompt("hours at amazon")
// let payAtAmazon = prompt("pay rate at amazon")
// let hoursAtFacebook = prompt("hours at google")
// let payAtFacebook = prompt("pay rate at amazon")
//
// let totalPay = hoursAtAmazon* payAtAmazon + hoursAtGoogle*payAtGoogle + hoursAtFacebook * payAtFacebook;
//     alert ("your total pay is " + totalPay+ " dollars")
//
// //SCENARIO 3
//
// let classNotFull = confirm("is class no full?");
// let noScheduleConflict = confirm("is there no conflict");
// let canEnroll = classNotFull && noScheduleConflict;
//
// if (canEnroll){
//     alert("you can enroll:");
// }else {
//     alert("you cant enroll");
// }
// //SCENARIO 4
//
// let numberOfItemsBought = prompt("how many items were purchased");
// let offerExpired = confirm("has the offer expired?");
// let premiumMember = confirm("is the customer premium member?");
// let makeProductOffer = (premiumMember || numberOfItemsBought > 2) &&
//     !offerExpired;
//
// if (makeProductOffer) {
//     alert("you bet a product offer ");
// } else {
//     alert("you are broke, sorry.");
// }
// //**********EXERCISE 4**************

var username = 'codeup';
var password = 'notastrongpassword';

let passwordLongEnough = password.length >= 5;
let passwordValid = password !== username;
let usernameLength = password.length <= 20;
let whiteSpaceCheck = password.endsWith(" ") ||password.startsWith(" ") || username.endsWith(" ")||username.startsWith(" ");

