

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
let total = 0;
let priceOfItem;
while(true){
    let userInput = prompt("Enter the price of your item:" + "\n Enter STOP when you are done");
    if (userInput === "STOP"){
        alert("Your final total is " + total.toFixed(2));
        break;
    } else {
        priceOfItem = parseFloat(userInput);
        total = total + priceOfItem;
        alert("Your final total is " + total.toFixed(2));
    }
}



