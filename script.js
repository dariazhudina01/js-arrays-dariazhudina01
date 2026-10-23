let colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
    console.log("Color: " + colors[i]);
}

let numbers = [];

for (let i = 0; i < 5; i++) {
    let input = typeof prompt !== 'undefined' ? prompt("Enter number " + (i + 1)) : "0";
    numbers.push(parseFloat(input));
}

let yourString = "";
for (let i = 0; i < numbers.length; i++) {
    yourString += numbers[i];
    if (i < numbers.length - 1) {
        yourString += ", ";
    }
}
console.log("Numbers: " + yourString);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum: " + sum);

let average = sum / numbers.length;
console.log("Average: " + average);

let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        count++;
    }
}
console.log("Even count: " + count);

let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Largest: " + largest);
