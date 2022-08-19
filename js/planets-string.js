(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?*/

    let stringWithBRTags = planetsArray.join(`<br>`);
    console.log(stringWithBRTags);

    let string = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";
    console.log(string);

    /**
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    //not done yet!
    let planetsWithli = planetsArray.join(`</Li><li>|`);
    planetsWithli = "<ul><li>" + planetsWithli + "</li></ul>";
    planetsDiv.innerHTML += planetsWithli;

    console.log(planetsWithli);

})();
