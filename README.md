# JavaScript Functions

In JavaScript, a function serves as a reusable block of code designed to perform a specific task or set of tasks. Functions are a cornerstone in JavaScript development, providing a means to organize and structure code efficiently. They enable encapsulation of code segments, allowing developers to assign a meaningful name and invoke or call the function whenever necessary.

## Basic Function Syntax

Here's a fundamental syntax for defining a function in JavaScript:

```javascript
function functionName(parameters) {
    // code to be executed
    return result; // optional, specifies the value to be returned
}
```

**Explanation of the Parts:**
- `function`: Keyword used to declare a function.
- `functionName`: The chosen name for the function, following the same rules as variable names.
- `parameters`: Optional input values that the function can accept; a function can have zero or more parameters.
- `{}`: Curly braces defining the body of the function, containing the code to be executed when the function is called.
- `return`: Keyword specifying the optional value that the function should return; if omitted, the function returns `undefined`.

## Example: Adding Two Numbers

```javascript
function addNumbers(a, b) {
    return a + b;
}

// Call the function
var result = addNumbers(3, 5);
console.log(result); // Outputs 8
```

In this example, `addNumbers` is a function that takes two parameters (`a` and `b`), adds them together, and returns the result. The function is then called with the arguments `3` and `5`, and the result is stored in the variable `result`. JavaScript functions play a crucial role in promoting code reuse, modularity, and maintainability.