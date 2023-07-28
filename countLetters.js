const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`❌ Assertion Failed: ${actual}, !==  ${expected}`);
};

const countLetters = function(letterInput) {
  let littleText = letterInput.toLowerCase();
  let lettersObj = {};
  for (let letter of littleText) {
    // make key
    lettersObj[letter] ? lettersObj[letter] += 1 : lettersObj[letter] = 1;
  }
  return lettersObj;
};

//let quote = '“I AM AND ALWAYS WILL BE THE OPTIMIST. THE HOPER OF FAR-FLUNG HOPES, AND THE DREAMER OF IMPROBABLE DREAMS.” 11TH DOCTOR';
//console.log(countLetters(quote));

/*
let quote = "Hello there... General Kenobi!";
assertEqual(countLetters(quote)['k'], 1);
assertEqual(countLetters(quote)[' '], 3);
assertEqual(countLetters(quote)['.'], 3);
assertEqual(countLetters(quote)['q'], undefined);
*/