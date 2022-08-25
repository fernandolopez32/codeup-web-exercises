
// My failed attempt
 let Array = [5,10,15];
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

function arrayAverage(array){
    // total accumulator variable
    let total = 0;
    for (let i = 0; i < array.length; i++){
        if(!isNumber(array[i]))
            {return false;}
        total += array[i];
    }
    return total/array.length;
}


let stringArray = ["jabba", "darth maul", "hondo"];

function longestString(arrayOfString){
    let longest = '';
    for (let i = 0; i<arrayOfString.length; i++){
        if (arrayOfString[i].length > longest.length) longest = arrayOfString[i];
    }
    return longest;
}