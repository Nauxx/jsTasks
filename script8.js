/* let peopleNr = parseInt(prompt("How many people are there?"));

let ages = [];

for (i = 0; i < peopleNr; i++) {
  let age = parseInt(prompt("What is the age of person #" + (i + 1)));
  ages.push(age);
}

function findBiggest() {
  let biggestNumber = ages[0];
  for (i = 0; i < ages.length; i++) {
    if (ages[i] > biggestNumber) {
      biggestNumber = ages[i];
    }
  }
  alert("the oldest person is " + biggestNumber);
}

findBiggest();

function findSmallest() {
  let smallestNumber = ages[0];
  for (i = 0; i < ages.length; i++) {
    if (ages[i] < smallestNumber) {
      smallestNumber = ages[i];
    }
  }
  alert("the youngest person is " + smallestNumber);
}

findSmallest();

let avrg = ages.reduce((acc, curr) => {
  return acc + curr;
});

alert("the average person is " + avrg / ages.length); */
