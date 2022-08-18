
// for(let i = 0; i ; i ++) {
//     if (userInput % 2 === 0) {
//         console.log("Number to skip is: " + userInput)
//         continue;
//
//     } else {
//         alert("Number entered is not odd please try again")
//         break;
//     }
// }

// for equivalent of while(true) === for(;;)
//
while(true) {
    let userInput = prompt("Enter an odd number form 1 through 50");
    if (userInput >= 1 && userInput <= 50 && userInput % 2 === 1) {
            console.log("Number to skip is: " + userInput);
            console.log(" ")
        for (let i = 1; i <= 50; i += 2) {
            if (i == userInput) {
                console.log(`Yikes skipping number: ` + userInput);
                continue;
            } else {
                console.log("Here is an odd number " +i);
            }
        }
            break;
        }
    }





