
// declaring an array literal:
// each item in an array is called an element and are zero index
// let groceryList = ['bread', 'eggs','butter', 'milk']
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

let prices = [32.99, 21.99, 6.99,4.99,12.99,8.98, 5.99];

prices.forEach(function (price, index){
    console.log("item number " + index + " cost "  +price);
});
function x(para1, para2){

}
//
// const x = (para1, para2) =>


// since the functions are anonymous we can use arrow sintax
// prices.forEach((price,index) => return  )
