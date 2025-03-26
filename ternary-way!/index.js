//ternary operator = a shortcut to if{} and else {} statments


let time = 11;
let greeting = time < 12 ? "good morning!" : "good afternood!";

console.log(greeting);


let age = 22;
let message = age >= 21 ? "You're an adult" : "You're a minor;"

console.log(message);

let fees = 22009;
let depofees = fees >= 4500 ? 10 : 0;

console.log(`Your Total Fees is $${fees - fees * (depofees/100)}`);
