const heading = document.querySelector('.heading1')

heading.style.color = 'orange';


// Variables
const firstName = 'Ian';
let secondName = 'Waithaka';
let age = 22;

console.log(firstName);
console.log(secondName);
console.log(age);

secondName = 'Kamau';
console.log(secondName);

age = 30;
console.log(age);


const oneBillion = 1_000_000_000;
console.log(oneBillion);


// Number formatting

const speed = 1000;
const formattedOutput = Intl.NumberFormat('en-US', {
    style: "unit",
    unit: "kilometer-per-hour"
});

console.log(formattedOutput.format(speed));

// Data types
// Object
const person = {
    firstName: 'Ian',
    secondName: 'Waithaka',
    surname: "Ng'ang'a",
    age: 22,
    isWealthy: true,
};

console.log(person);

//Array
const people = [
    'Ian',
    'Shadrack',
    'Martin',
    'Crystal',
    22,
    25,
    20,
    22,
    true,
    true,
    true,
    true
];

console.log(people);