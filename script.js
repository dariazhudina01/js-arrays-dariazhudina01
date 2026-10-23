// ============================================
//  Unit 8.5 – Arrays
// ============================================
//  This program runs automatically when the page loads.
//  All output goes to console.log() — open the browser
//  console (F12) to see the results.
//
//  Complete each section below by following the STEP comments.
// ============================================


// ============================================
//  WARM-UP: Favorite Colors
// ============================================
// Build an array of 3 colors and print each one.

// STEP 1: Create an array called "colors" with exactly
//         three strings: "red", "green", "blue"
//         Use let to declare it.
let colors = ["red", "green", "blue"];

// STEP 2: Use a for loop to print each color.
//         Each line should say exactly:
//         "Color: red"
//         "Color: green"
//         "Color: blue"
//         Use: console.log("Color: " + colors[i])
for (let i = 0; i < colors.length; i++) {
  console.log("Color: " + colors[i]);
}
// ============================================
//  MAIN: Number Analyzer
// ============================================
// Collect 5 numbers from the user, store them in an array,
// then calculate and display statistics.

// STEP 3: Create an empty array called "numbers" using let.
//         let numbers = [];
let numbers = [];

// STEP 4: Use a for loop that runs 5 times (i = 0 to 4).
//         Inside the loop:
//         a) Use prompt() to ask "Enter number " + (i + 1)
//         b) Use parseFloat() to convert the input to a number
//         c) Use .push() to add the number to the array
for (let i = 0; i < 5; i++) {
  let input = prompt("Enter number " + (i + 1));
  let number = parseFloat(input);
  numbers.push(number);
}

// STEP 5: Print all the numbers on one line.
//         Build a string by looping through the array.
//         Separate each number with ", " (comma and space).
//         Print: console.log("Numbers: " + yourString)
//         Example: "Numbers: 10, 20, 30, 40, 50"
//
//         HINT: Start with an empty string. In the loop,
//         add the number. If it's not the last number,
//         also add ", " after it.
let numbersString = "";
for (let i = 0; i < numbers.length; i++) {
  numbersString += numbers[i];
  if (i < numbers.length - 1) {
    numbersString += ", ";
  }
}
console.log("Numbers: " + numbersString);

// STEP 6: Calculate the sum of all numbers.
//         Use a for loop to add each number to a running total.
//         Print: console.log("Sum: " + sum)
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum: " + sum);

// STEP 7: Calculate the average.
//         Average = sum / numbers.length
//         Print: console.log("Average: " + average)
//         (No rounding needed)
let average = sum / numbers.length;
console.log("Average: " + average);

// STEP 8: Count how many numbers are even.
//         A number is even if number % 2 equals 0.
//         Use a for loop and an if statement.
//         Print: console.log("Even count: " + count)
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    count++;
  }
}
console.log("Even count: " + count);

// STEP 9: Find the largest number.
//         Start with the first number as the largest.
//         Loop through the rest and update if you find a bigger one.
//         Print: console.log("Largest: " + largest)
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("Largest: " + largest);