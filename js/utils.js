// Is a Number
function isNumber(value) {
    return !(isNaN(value) || typeof value === "boolean" || value === null|| value === undefined);
}


// Is string
function isString(input){
    return typeof input === 'string';
}

