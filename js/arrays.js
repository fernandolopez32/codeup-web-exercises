
// declaring an array literal:
// each item in an array is called an element and are zero index
let groceryList = ['bread', 'eggs','butter', 'milk']
console.log(groceryList);
//
// for (let i=0; i < groceryList.length; i++) {
//     if (i === groceryList.length - 1) {
//         console.log("I have to buy " + groceryList[i] + ".");
//     } else {
//         console.log("I have to buy " + groceryList[i] + " and");
//     }
// }
// let myArray = ['pizza', 'burgers', 'bananas', 'apples']
//
// for (let i = 0; i <myArray.length; i++) {
//     if (i === myArray.length - 4) {
//         console.log("I like " + myArray[i] + " because of TMNT!");
//     } else  {
//         console.log(`First things that came to my mind ` + myArray[i]);
//     }
// }

let texasCities = ['San Antonio','Houston', 'Dallas', 'El Paso'];
// // for (let i = 0; i < texasCities.length; i++) {
// //     if (i % 2 === 1) {
// //         console.log(texasCities[i] + " is an odd texas city")
// //     } else {
// //         console.log(texasCities[i]);
// //     }
// // }
//
// function outputArray (array){
//     for (let i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }
// outputArray(texasCities);

// forEach loop takes an anonymous function
// the function that we pass to the forEach loop has up to three parameters
// the first parameter represents the arrays elements
// the second parameter represents the element index
//third parameter represents the array itself
// the second and third parameters are optional
//
// let prices = [32.99, 21.99, 6.99,4.99,12.99,8.98, 5.99];
// //
// // prices.forEach(function (price, index){
// //     console.log("item number " + index + " cost "  +price);
// // });
// // function x(para1, para2){
// //
// // }
// //
// // const x = (para1, para2) =>
//
//
// // since the functions are anonymous we can use arrow sintax
// // prices.forEach((price,index) => return  )
//
//
// // add and remove form the end
// groceryList.push("potatoes", "tomatoes", "onion", "soup");
// console.log(groceryList);
// groceryList.pop();
// console.log(groceryList);
//
// //shift takes away form the
//
// groceryList.unshift("hot fries","queso");
// console.log(groceryList);
// groceryList.shift();
//
// let indexOfButter = groceryList.indexOf("butter");
// console.log(indexOfButter);
//
// //substitute  something at any know index by assigning a new value at that point
//
// groceryList[indexOfButter] = "peanut butter";
// console.log(groceryList);
//
// //slicing
// let firstHalfOfGroceryList = groceryList.slice(0,4);
// console.log(firstHalfOfGroceryList);
// let secondHalfOfGroceryList = groceryList.slice(4);
// console.log(secondHalfOfGroceryList);
//
// //add something in the middle of an array
// firstHalfOfGroceryList.push("butter");
// groceryList = firstHalfOfGroceryList.concat(secondHalfOfGroceryList);
// console.log(groceryList);
// //reverse
// groceryList.reverse();
// console.log(groceryList);
// //sort
// groceryList.sort();
// console.log(groceryList.reverse());
//
//
//
// prices.sort(function(a,b){
//     return a-b;
// })
// console.log(prices);
//
//
// groceryList[4] = "Zebras";
// console.log(groceryList)
// console.log(groceryList.sort());
//
// // groceryList.forEach(item => item = item.toLowerCase());
// // console.log()
//
// groceryList.forEach((item, index, array) =>{
//   array[index] = item.toLowerCase();
// })
// console.log(groceryList);
// // for ( let i = 0; i< groceryList.length; i++){
// //     groceryList[i] = groceryList[i].toLowerCase();
// //}
//
// let quote = "All the wolds a play";
// let quoteArray = quote.split(" ");
// console.log(quoteArray);
//
// quoteArray.join(" ");

// let wishList = [21, 32, 41, 32];
//
// function  checkWishListPrices(wishList) {
//     for (let i = 0; i < wishList.length; i++) {
//         if (wishList[i] > 50) {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(checkWishListPrices(wishList));
//
// function letWishListTotal(wishList){
//     let total = 0;
//     for(let i = 0; i <wishlist.length; i++){
//         total += wishList[i];
//     }
//     return total<= 100;
// }
//
// console.log(letWishListTotal(wishList));
//
// function processWishList(wishList,TestFunction1,testFunction2){
//     return TestFunction1(wishList) && testFunction2(wishList);
//
// }
//
// console.log(processWishList(wishList,checkWishListPrices, letWishListTotal));

function zatannaMagic(string){
    let commandArray = string.toLowerCase().split("");
    let newArray = [];
    for(let i = 0; i<commandArray.length; i++){
        newArray.push(commandArray[i].split('').reverse().join(''));
    }
    return newArray.join('') +"!";
}