const grades = [
  {
    name: "Bob",
    scores: [80, 90, 100]
  }
];


console.log(grades[0].scores);

// loop

let total = 0; 
for(let i = 0; i < grades [0].scores.length; i++){
    total+= grades[0].scores[i];
}
console.log(total);

// find average 

let average = total / grades [0].scores.length;
console.log(average);

