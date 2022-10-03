const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// const atLeast3Languages = users.filter((user)=> {
//     return user.languages.length >= 3
// });
const atLeast3Languages = users.filter((user)=> user.languages.length > 3);

// console.log(atLeast3Languages);

// const userEmails = users.map((user) => {
//     return user.email
// });
const userEmails = users.map((user) => user.email);
// console.log(userEmails);

// let totalYears = users.reduce(function (prev, current ,i,array)  {
//     return prev + current.yearsOfExperience/ array.length;
// },0);

let totalYears = users.reduce((prev, current,i,array ) => prev + current.yearsOfExperience/array.length, 0);

// console.log(totalYears);

let longestEmail = users.reduce((result, currentValue) => {
    if(result.length < currentValue.email.length){
        return currentValue.email;
    }
    return result
},'');

console.log(longestEmail);

const listOfInstructors = users.reduce((acc, current) =>{
   return acc + current.name +' ';
},'Your instructors are: ');
console.log(listOfInstructors);

const arrayOfLanguages = users.reduce((result, current,i) => {
   let answer = ''
    current.languages.forEach((e) =>{
        console.log(e);
        return answer + e
    });
    return answer
});

console.log(arrayOfLanguages);


// let newArray = [];
// users.forEach((e)=> {
//     if(!newArray.includes(...e.languages)){
//         newArray.push(...e.languages);
//         console.log(newArray)
//     }
//     return newArray
// })
// console.log(newArray)