
// declaring an array literal:
// each item in an array is called an element and are zero index
let groceryList = ['bread', 'eggs','butter', 'milk']

for (let i=0; i < groceryList.length; i++) {
    if (i === groceryList.length - 1) {
        console.log("I have to buy " + groceryList[i] + ".");
    } else {
        console.log("I have to buy " + groceryList[i] + " and");
    }
}