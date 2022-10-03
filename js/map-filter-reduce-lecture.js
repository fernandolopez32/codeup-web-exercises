
    const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
    let output = "";
    //
    // prices.forEach((price, index, array) => {
    //     const tax = (price * 0.0025).toFixed(2);
    //     const total = (price + parseFloat(tax)).toFixed(2);
    //
    //     output +=  `<p>${price}</p>`;
    //     console.log(output);
    //     $('div').html(output);
    //
    //     if(index === array.length -1){
    //         $('div').append(`<p>That's is!!!</p>`)
    //     }
    // });
    const pricesAfterTax = prices.map(price =>{
        const tax = (price * 0.0025).toFixed(2);
        const total = (price + parseFloat(tax)).toFixed(2);
        return parseFloat(total);
    });
    console.log(prices);
    console.log(pricesAfterTax);

    const doubledArray = prices.map(price => price *2);
    console.log(doubledArray);

    const desserts = ['sherbet','whisky cake','cupcake','eclair'];

    const eatingDessert = desserts.map(dessert => `Eating ${dessert}`);
    eatingDessert.forEach(element => {
        $('div').append(`<p>${element}</p>`);

    });

    const cars = [
        {
            make: "Honda",
            model: "Civic",
            mileage: 10428
        },
        {
            make: "Toyota",
            model: "Corolla",
            mileage: 9425
        },
        {
            make: "Ford",
            model: "Mustang",
            mileage: 2567
        },
        {
            make: "Audi",
            model: "A3",
            mileage: 14500
        },
        {
            make: "Mazda",
            model: "3",
            mileage: 11248
        }
    ];

    // const mileages = cars.map(car => car.mileage);
    // console.log(mileages);


    const newObject = cars.map(car => {
        car.newProp = 'new property';
        return car;
    });
    console.log(cars[0])

    // const newDessert = desserts.map(dessert => {
    //     dessert.toUpperCase()
    //     return dessert;
    // })
    // console.log(newDessert);

    // const under10k = cars.filter(car => car.mileage < 10000);
    // console.log(under10k);
    // console.log(under10k[0].mileage);
    //
    // under10k.forEach(({make,model,mileage},index) =>{
    //     output += `<p>I found a ${make} ${model} with ${mileage} miles </p>`;
    //     $('#output').html(output);
    // });

     prices.filter(price => price < 10).map(price =>{
        const tax = (price * 0.0825).toFixed(2);
        const total = (price + parseFloat(tax)).toFixed(2);
        return parseFloat(total);
    }).forEach(price => $('div').append(`<p>${price}</p>`));

    // console.log(under10dollarsWithTax)

    // const totalCost = prices.reduce(function(total, itemPrice, index,array){
    //     console.log(`The index is ${index}, the total is ${total.toFixed(2)}, the itemPrice is ${itemPrice}`);
    //     return total + itemPrice;
    // });

    // console.log(totalCost);
    // $("#output").append(`<p>The total is ${totalCost}</p>`);

// function passed to reduce method takes an accumulator parameter
// accumulator is often abr to ACC


// getting the average of

    const averagePrice = prices.reduce((function (acc,curr, i,array){
        acc = acc + curr;
        if(i === array.length -1) {
            return acc/array.length;
        }
    return acc
    }));
    console.log(averagePrice);

    console.log('You have 156.39 in your shopping cart.')

    // const total = prices.reduce((acc,curr) =>{
    //     return acc + curr;
    // },156.39)
    //
    // console.log(`Your new total is now ${total.toFixed(2)}`);


    const mileages = cars.reduce((acc ,car) => {
        acc.push(car.mileage);
        return acc;
    },[]);

    console.log(mileages);

    // const highestmileage = cars.reduce((acc ,car,i,array) => {
    //     acc.push(car.mileage);
    //     if (i===array.length -1){
    //         return acc.sort((a,b)=> b-a)[0];
    //     }
    //     return acc;
    // },[])


    const highestmileage = cars.reduce((acc ,car,i,array) => {
        acc.push(car.mileage);
            return acc;
    },[]).reduce((acc, mlgs) => {
            return Math.max(acc,mlgs);
    });

    // const highestmileage = cars.reduce((acc ,car,i,array) => {
    //     acc.push(car.mileage);
    //     if (i===array.length -1){
    //         return Math.max.apply(Math, acc);
    //     } else {acc.push(car.mileage)
    //     }
    //     return acc;
    // },[]);

    console.log(highestmileage);


    // TODO: Given the following array, complete the todos...
    const dogs = [
        {
            dogName: 'Bubbles',
            age: 10,
            isTrained: false
        },
        {
            dogName: 'Lexie',
            age: 3,
            isTrained: true
        },
        {
            dogName: 'Doggy',
            age: 5,
            isTrained: false
        },
        {
            dogName: 'Flopper',
            age: 3,
            isTrained: true
        },
        {
            dogName: 'Lexie',
            age: 1,
            isTrained: true
        },
        {
            dogName: 'Skip',
            age: 7,
            isTrained: true
        },
        {
            dogName: 'Blue',
            age: 4,
            isTrained: false
        }
    ];

    // MAP
    // TODO 1: using map, create a new array of dog names from the dogs array
    const dogsNames = dogs.map(e => e.dogName);
    console.log('Exercise 1');
    console.log(dogsNames);
    // TODO 2: using map, create a new array of dog ages from the dogs array
    const ages = dogs.map(e => e.age);
    console.log('Exercise 2');
    console.log(ages);
    // TODO 3: using map, create a new array of dog objects from the dogs array that only have dog names and age properties and values
    const dogObject = dogs.map((e) =>{
        return {
            dogNames: `${e.dogName}`,
            age: e.age
        }
    });
    console.log('Exercise 3');
    console.log(dogObject);
    // FILTER
    // TODO 4: using filter, create a new array containing only dogs younger than 10 years old
    const youngerThan10 = dogs.filter((dog) => dog.age < 10);
    console.log('Exercise 4');
    console.log(youngerThan10);
    // TODO 5: using filter, create a new array containing only dogs named 'Lexie'
    const lexiDog = dogs.filter((dog => dog.dogName === 'Lexie'));
    console.log('Exercise 5');
    console.log(lexiDog);
    // TODO 6: using filter, create a new array containing only dogs that are trained and younger than 10
    const youngAndTrained = dogs.filter((dog) => dog.age < 10 && dog.isTrained === true);
    console.log('Exercise 6');
    console.log(youngAndTrained);
    // REDUCE
    // TODO 7: using reduce, return a string containing all dog names together with no spaces ("BubblesLexieDoggy...")
    const namesString = dogs.reduce((prev, curr,) =>{
      return prev + curr.dogName;
    },'');
    console.log('Exercise 7:');
    console.log(namesString);
    // TODO 8: using reduce, return the total of adding all dog ages together (18)
    const addAge = dogs.reduce((prev, curr,) =>{
        return prev + curr.age;
    },0);
    console.log('Exercise 8: ');
    console.log(addAge);
    // TODO 9: using reduce, return an array of dog objects with all isTrained properties set to true
    // const trainedDogsFilter = dogs.filter((e) => e.isTrained === true);
    // console.log(trainedDogsFilter);
    // const trainedDogs = dogs.reduce((acc,curr ) =>{
    //     if(curr.isTrained === true){
    //         console.log(curr)
    //     }
    //     return acc
    // },[]);

    const allGood = dogs.reduce((acc, dog) => {
        let newDog = {
            dogname: dog.dogName,
            age: dog.age,
            isTrained: true
        };
        acc.push(newDog);
        return acc
    },[]);
    console.log(allGood);
    // EXTRA CHALLENGES
    // TODO 10: what is the average age of each dog?
    const averageAge = dogs.reduce((acc, dog,i,array) => {
        return acc + dog.age/array.length;
    },0);
    console.log('Exercise 10:');
    console.log(averageAge);
    // TODO 11: what is the average age of dogs that are trained?
    console.log('Exercise 11:');
    // TODO 12: what is the average length of names of untrained dogs?
    console.log('Exercise 12:');
    // TODO 13: what are the combined ages of all dogs in dog years? (7x more than a human year)
    let combinedDogYears = dogs.reduce((acc, dog,i) =>{
        if(i === (dogs.length -1)){
            return (acc*7)
        }
        return acc + parseInt(dog.age);
    })
    console.log('Exercise 13:');
    console.log(combinedDogYears);

    // TODO 14: create a string of the first letters of each dog name for dogs three years old (should be "LF")
    console.log('Exercise 14:');