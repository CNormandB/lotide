const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`❌ Assertion Failed: ${actual}, !==  ${expected}`);
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  //if not a perfect match return false
  let keys = Object.keys(object1);
  if (!eqArrays(keys, Object.keys(object2))) {
    return false;
  }
  for (let key of keys) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

let obj1 = {
  left : 'wrong',
  right : 'right'
};

let obj2 = {
  left : 'right',
  right : 'wrong'
};

let obj3 = {
  gone : 'you left!',
  right : 'wrong'
};

let obj4 = {
  left : ['right'],
  right : ['wrong']
};

assertEqual(eqObjects(obj1, obj1), true);
assertEqual(eqObjects(obj1, obj2), false);
assertEqual(eqObjects(obj1, obj3), false);
assertEqual(eqObjects(obj4, obj4), true);