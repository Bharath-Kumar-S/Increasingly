let arr = [39, 65, 97, 95, 39, 67];

//Using Array.reduce
let sum = arr.reduce((acc, current) => acc + current);
console.log(sum);

//Using Array.filter
let higher = arr.filter(v => v > 60);
console.log(higher);

//Using Array,map
let taxed_amount = arr.map(v => v + Math.floor(v * 0.1));
console.log(taxed_amount);

//Finding min number
let min = Math.min(...arr);
console.log(min)

//Finding max number
let max = Math.max(...arr);
console.log(max)