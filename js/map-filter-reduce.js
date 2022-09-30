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
const userEmails = users.map((user) => user.yearsOfExperience);
console.log(userEmails.length);

let totalYears = users.reduce(function (prev, current ,i,array)  {
    total = prev + current.yearsOfExperience
    devider = array.map((e) => e.yearsOfExperience)
    return total/devider.length
},0);

// let totalYears = users.reduce((prev, current ) => prev + current.yearsOfExperience, 0)

console.log(totalYears);