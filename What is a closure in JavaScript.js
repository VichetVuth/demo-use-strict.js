# What is a closure in JavaScript.js

function createCounter() {
    let count : number = 0; // This variable is part of the lexical scope of createCounter.

    return function() : number {
        // This inner function forms a closure.

        // Replace 'Sok Bara' with your full name
        console.log('Student Name: Vuth Vichet');

        count++;
        // It remembers and accesses the count variable from its parent's scope.
        return count;
    };
}

// Create a counter instance  
const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
