const data = [
    {
        name: 'pawel',
        age: 37,
        city: 'węgierska górka',
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'marcin',
        age: 24,
        city: 'lodz',
        hobbies: ['thing1', 'thing2', 'thing3']
    },
    {
        name: "lukasz",
        age: 28,
        city: "torun",
        hobbies: ['js', 'bikes', 'sport']
    },
    {
        name: 'karol',
        age: 24,
        city: 'gdansk',
        hobbies: ['games', 'programming', 'eat']
    },
    {
        name: 'mikołaj',
        age: 20,
        city: 'Kraków',
        hobbies: ['js', 'sport']
    },
    {
        name: 'damian',
        age: 30,
        city: 'poznań',
        hobbies: ['bike', 'js']
    },
    {
        name: 'kasper',
        age: 25,
        city: 'krakow',
        hobbies: ['js', 'js', 'drugs']
    },
    {
        name: 'Damian',
        age: 24,
        city: 'Warka',
        hobbies: ['front-end', 'grafika', 'rysowanie', 'książki', 'gry', 'filmy']
    },
    {
        name: 'Wiktor',
        age: 22,
        city: 'Warsaw',
        hobbies: ['js', 'gym']
    },
    {
        name: 'konrad',
        age: 22,
        city: 'Wrocław',
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'jacek',
        age: 19,
        city: 'olkusz',
        hobbies: ['f1', 'football', 'video games']
    },
    {
        name: 'rafal',
        age: 40,
        city: 'Bielsko-Biała',
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'szczepan',
        age: 22,
        city: 'łęczna',
        hobbies: ['football', 'cycling'],
    }
]

// avg age
// v1

// let temp = 0;
//
// data.forEach(function(person) {
//     temp += person.age;
// });
//
// console.log(temp / data.length);

// v2
// const result = data.map(function(person){
//     return person.age;
// });
//
// const sum = result.reduce(function(accumulator, currentElement, idx, arr){
//     return accumulator + currentElement;
// }, 0)
// console.log(sum / data.length);

// v3
// const result = data.reduce((acc, ce) => acc + ce.age, 0);
// console.log(result / data.length);


// avg age for people with 3 hobbies
// const result = data.filter((person) => person.hobbies.length === 3);
// const resultAges = result.map((person) => person.age);
// const sum = resultAges.reduce((acc, age) => acc + age);
// console.log(sum / result.length);

// const result = data
//     .filter((person) => person.hobbies.length === 3)
//     .map((person) => person.age)
//     .reduce((acc, age) => acc + age);

// name of people who loves js
// const result = data
//     .filter((item) => item.hobbies.includes('js'))
//     .map((item) => item.name);
//
// console.log(result)

// count unique hobbies
// const temp = [];
//
// data.forEach((person) => {
//     person.hobbies.forEach((hobby) => {
//         temp.push(hobby)
//     })
// });
//
// const result = temp.filter((hobby, idx, arr) => !arr.includes(hobby, idx + 1))
//
// console.log(result);

// const result = new Set(data
//     .map((person) => person.hobbies)
//     .flat());
//
// console.log(result.size);


// if anyone has more than 30 years-old
// const result = data.some((person) => person.age > 30);
// console.log(result);

// const result = data.every((item) => item.hobbies.length === 3);
// console.log(result);

// get index of object with name = 'rafal'
const person = data.filter((p) => p.name === 'rafal');
console.log(person)
const result = data.indexOf(person[0])
console.log(result);


// --- arrow function

// function expression
// const add = function (a, b){
//     return a + b;
// }
//
// const add1 = (a, b) => {
//     // logic
//     return a + b;
// }
//
// const add2 = (a, b) => a + b;