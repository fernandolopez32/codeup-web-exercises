

// let slices =4;
// console.log(`There is ${slices} slices`)
// while(slices >0) {
//     console.log("ill have slice");
//     slices = slices - 1;
//     console.log(`now there is ${slices} left`);
// }
// console.log("No more pizza ")
//
//
// let counter = 100;
// let number = 5;
// while (number < 200){
//     console.log(number);
//     number *= 2;
//
// }

//********SUDO*CODE*******
//ask user input-- how mch something cost
// assign the input to a variable
//declare a variable to hold the total cost
//tell user what the total is
// get the user input for the next items cost
// way for the user to say when there's no more items

//FIRST DRAFT
// let total = 0
// let priceOfItem = parseFloat(prompt("Enter the price of your item "));
// total = total + priceOfItem;
// alert("Your total is now " + total);
// let userInput = "";
// while (userInput !=="stop") {
//     userInput = (prompt("Enter the price of your item "));
//     if (userInput === "stop"){
//         alert("Your total is now " + total);
//     }else{
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("your total is not" + total);
//     }
// }
// let total = 0;
// let priceOfItem;
// while(true){
//     let userInput = prompt("Enter the price of your item:" + "\n Enter STOP when you are done");
//     if (userInput === "STOP"){
//         alert("Your final total is " + total.toFixed(2));
//         break;
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("Your final total is " + total.toFixed(2));
//     }
// }

// let number = Math.ceil(Math.random())*6;
// let guess ;
// do{
//     guess = parseInt(prompt("Enter a number between one and six"));
// } while (guess !== number);
// alert(`Your guess of ${guess} is correct`);

// loop control variable
// initialize it to a starting value
// let count = 100 ;
// //check the value of the loop control variable in a conditional test
// while (count >= 0){
//     console.log(count);
//     //change the value of the loop control variable
//     count --;
// }
//
// for (let i = 100; i >= 0;  i --){
//     console.log(i)
// }

// let i= 0
// while (i <100 ){
//     console.log(i);
//     i++;
// }
// console.log("outside the loop : " + i);

for ( i = 0; i<100; i++){
    console.log(i)
}
console.log(i)
