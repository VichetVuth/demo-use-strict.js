'use strict';

try {

    console.log('Student Name: Vuth Vichet');
    x = 10; // ReferenceError: x is not defined
} catch (error) {
    console.error(error.message); // Output: "x is not defined"
}

function demo() : void { Show usages new*
    try {
        y = 20; // ReferenceError: y is not defined
    } catch (error) {
        console.error(error.message); // Output: "y is not defined"
    }
}

demo();

try {
    eval(x: 'var z = 50; delete z:'); // SyntaxError: Cannot delete variable declared with var
} catch (error) {
    console.error(error.message); // Output: "Cannot delete property 'z' of #<Object>"
}
