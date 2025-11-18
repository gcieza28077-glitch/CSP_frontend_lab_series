/* ===========================================================
   Lab 1.2 – Data Types
   Primitive types, typeof, and basic conversions.
   =========================================================== */

// 1️⃣ Primitive Types
// Declare one variable for each primitive type: string, number, boolean, null, undefined.
// Print each variable and its type using typeof.
let myString = "Hello, world!";      // string
let myNumber = 42;                   // number
let myBoolean = true;                // boolean
let myNull = null;                   // null
let myUndefined;                     // undefined (no value assigned)


// 2️⃣ Typeof Check
// Compare typeof null and typeof undefined.
// Explain in a comment why the results differ.
console.log(typeof null);       // "object"
console.log(typeof undefined);  // "undefined"


// 3️⃣ Concatenation vs Addition
// Use "5" and 5 to demonstrate the difference between concatenation and numeric addition.
// Print both results and explain the behavior.
let strNumber = "5";
let num = 5;
"5" + "5" 

// 4️⃣ Explicit Conversions
// Convert different values using Number(), String(), and Boolean().
// Print each result and describe what you notice.
let values = [0, 1, "42", "", "hello", null, undefined, true, false];
 console.log("Original:", value, 
              "| Number():", Number(value), 
              "| String():", String(value), 
              "| Boolean():", Boolean(value));

// 5️⃣ NaN and isNaN()
// Try converting a non-numeric string such as "hello" to a number.
// Use isNaN() to check the result and comment on the output.


// 6️⃣ Template Literals
// Create variables name and age.
// Use a template literal to print: Hello, my name is ${name} and I am ${age} years old.


/* ===========================================================
   🎟 EXIT TICKET
   1. Which data type(s) did you use today and why?
   2. Where did you encounter type conversion (implicit or explicit)?
   3. One misconception I corrected or a tip I learned.
   4. What would you try next time to debug faster?
   =========================================================== */
