// Calculator Javascript Code//

//add function//
function add(a, b) {
  return a + b;
};

//subtract function//
function subtract(a, b) {
    return a - b;
};

//multiply function//
function multiply(a, b) {
    return a * b;
};

//divide function//
function divide(a, b) {
    return a / b;
};

//operate function - takes two values and chooses which function to perform//
function operate(a, b) {
    if (plus === true) {
        c = add(a, b);
    } else if (minus === true) {
        c = subtract(a, b);
    } else if (times === true) {
       c = multiply(a, b);
    } else if (over === true) {
       c = divide(a, b);
    } else {
        c = c;
    };
    return c;
};

