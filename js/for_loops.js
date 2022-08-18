
//1
// function showMultiplicationTable(number){
//     for (let i=1; i <=10; i++) {
//         console.log(number + "x" + i +"=" + number * i);
//     }
// }
// showMultiplicationTable(7);

// 2
for( let i = 0; i <= 10; i++){
    let randomNumber = Math.floor(Math.random()*181)+20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber+ " is odd");
    }
}

// console.log();
//5
// for ( i = 100; i>=1; i-=5){
//     console.log(i)
// }
// console.log(i);