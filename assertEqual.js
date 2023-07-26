const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`❌ Assertion Failed: ${actual}, !==  ${expected}`);
};
assertEqual();
/*Test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
*/