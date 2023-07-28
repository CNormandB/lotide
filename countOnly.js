const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`❌ Assertion Failed: ${actual}, !==  ${expected}`);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
//function calculate how many times each string appears in the allItems array of strings
/*
1.Create a new object that contains all of the same keys as items to count
2.All of the values of those keys get initialized to 0
3.Loop over all of our allItems

INSIDE THE LOOP
     3.1 If the value of our current item is true, we add 1 to the count in our new object for that keys
     3.2 If the value is false, we ignore it.
BACK OUTSIDE THE LOOP

Return our object with the counts*/
const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let name of allItems) {
    if (itemsToCount[name]) {
      if (result[name]) {
        result[name] += 1;
      } else {
        result[name] = 1;
      }
    }
  }
  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const thingsToCount = {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
};


const result1 = countOnly(firstNames, thingsToCount);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);