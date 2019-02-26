// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/*

  //Given this problem:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  const length = arr.length;

  return cb(length);
}

getLength(items, length => console.log(length));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  const lastEl = arr[arr.length - 1];

  return cb(lastEl);
}

last(items, last => console.log(last));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;

  return cb(sum);
}

sumNums(1, 5, sum => console.log(sum));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let mutiply = x * y;

  return cb(mutiply);
}

multiplyNums(5, 5, total => console.log(total));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)) {
    return cb(true);
  }

  return cb(false);
}

contains("Gum", items, value => console.log(value));

/* STRETCH PROBLEM */
const names = ["joseph", "joseph", "matt", "steven"];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const arr = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== array[i + 1]) {
      arr.push(array[i]);
    }
  }

  return cb(arr);
}

removeDuplicates(names, arr => console.log(arr));
