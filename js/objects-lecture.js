let currentWeather = {
    humidity:77,
    temp: 82.33,
    feels_like: 88.73,
    clouds: 75
}
console.log(currentWeather.temp);
†
let fighter = {
    name: "Arata",
    hitPoints: 18,
    maxDamage: 8,
    attack: function (opponent){
        console.log((opponent.name + " has " +opponent.hitPoints))
        console.log(this.name + " attack!");
        let damage = Math.ceil(Math.random() * this.maxDamage);
        opponent.hitPoints -= damage;
        console.log((this.name + " does "+ damage + " points of damage"));
        console.log(opponent.name + " now has "+ opponent.hitPoints + " hit points.")
    }
}

let monster = {
    name: "goblin",
    hitPoints: 8,
    maxDamage: 6
}
