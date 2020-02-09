var number = function(array) {
  //your awesome code here
  let finalArray = [];
  for (let i = 1; i <= array.length; i++) {
    finalArray.push(i + ": " + array[i - 1]);
  }

  return finalArray;
};

//examples to test

number([]); // => []
number(["a", "b", "c"]); // => ["1: a", "2: b", "3: c"]
