console.log('hello world');

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let isApprove = true; // boolean literal
let something = undefined;
let some = null;

let person = {
    name: 'sudhanshu',
    age: 30
};

//dot notation to access the variables 
person.name = 'Monu';// mostly used
console.log(person.name);
//bracket notation 
person['name'] = 'sudhanshu kumar';
console.log(person['name']);

let products = ['red', 'bule'];//array literal
console.log(products[0]);
products[2] = 1;
console.log(products.length);

function greet(n)
{
    console.log('hello '+n);
}
greet('john');

function square(number)
{
    return number * number;
}
console.log(square(10));