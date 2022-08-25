function isANumber(value) {
    return !(isNaN(value) || typeof value === "boolean" || value === null);
}
// My failed attempt
// let numberArray = [1,2,4,6];
//
//
// function average(input){
//     for (let i = 1; i < input.length+1; i++){
//         return (input(i)+input(i));
//     }
//     // if (isANumber(input)){
//     //     return false;
//    // }
// }

