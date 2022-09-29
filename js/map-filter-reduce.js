
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

    const mileages = cars.map(car => car.mileage);
    console.log(mileages);


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

    const under10k = cars.filter(car => car.mileage < 10000);
    console.log(under10k);
    console.log(under10k[0].mileage);

    under10k.forEach(({make,model,mileage},index) =>{
        output += `<p>I found a ${make} ${model} with ${mileage} miles </p>`;
        $('#output').html(output);
    });

     prices.filter(price => price < 10).map(price =>{
        const tax = (price * 0.0825).toFixed(2);
        const total = (price + parseFloat(tax)).toFixed(2);
        return parseFloat(total);
    }).forEach(price => $('div').append(`<p>${price}</p>`));

    // console.log(under10dollarsWithTax)

    const totalCost = prices.reduce(function(total, itemPrice, index){
        console.log(`The index is ${index}, the total is ${total}, the itemPrice is ${itemPrice}`);
        return total + itemPrice;
    });

    // console.log(totalCost);

    // let totalCost = affordablesWithTax.reduce(function(total, itemPrice, index){
    //     console.log(`The index is ${index}, the total is ${total}, the itemPrice is ${itemPrice}`);
    //     return total + itemPrice;
    // });
    $("#output").append(`<p>The total is ${totalCost}</p>`);

