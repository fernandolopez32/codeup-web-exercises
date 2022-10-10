// API application programing interface

// a set of rules defining how applications and or devices can connect to each other and communicate with one another

//REST means representational state transfer.

// REST API communicate via HTTP request

//In a REST  API, communication via HTTP request is used to perform the standard set of actions called CRUD

//Create, Read, Update, Delete

// JSON JavaScript Object Notation is not mandatory but is popular because it is both human and machine-readable

// https://glitch.com/iron-quirky-laser

//the R in CRUD is Read
const booksURL = 'https://iron-quirky-laser.glitch.me/books';

const moviesURL = 'https://iron-quirky-laser.glitch.me/movies';

function getMovies(){
    fetch(moviesURL)
        .then(resp => resp.json()).then(data => console.log(data));
}
getMovies()

// C in CRUD:  Create

// const bookToPost = {
//     title: 'Lord Of The Rings',
//     author: {
//         firstName: 'someone',
//         lastName: 'somewhere'
//     }
// }
//
// const postOptions = {
//     method: 'POST',
//     header: {
//         'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify(bookToPost)
// }

function getBooks(){
    fetch(booksURL)
        .then(resp => resp.json()).then(data => console.log(data));
}
getBooks();

const bookToPost = {
    title: "another",
    author: {
        firstName: "B",
        lastName: "Person"
    }
}

const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(bookToPost)
}

fetch(booksURL, postOptions);

fetch(booksURL, postOptions).then(getBooks);

// // U IN crud: Updating with PUT and PATCH request
// // we use put to replace the entire content
// // we use patch to modify only part of the entry

let modification = {
    title: 'Elemore of aquetine: queen of France, Queen  of England'
}

const patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(modification)
}

// fetch(booksURL + "/1",patchOptions).then(getBooks);

modification = {
    title: "Elemore of aquetine: and the four kings",
    author: {
        firstName: "Amy",
        lastName:  "kelly"
    }
}
//
//
// // D in CRUD: Delete
//
const deleteOptions ={
    method: 'DELETE',
    headers: {
        'ContentType' : 'application/json'
    }
}
fetch(booksURL + '/1',deleteOptions).then(getBooks);
//
//
//
//
//
//
//
//
//
