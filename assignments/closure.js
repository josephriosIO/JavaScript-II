// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function city() {
  const newLaw = "Everyone must eat chalk";
  console.log("haha new law");
  function cityBlock() {
    return "this law here stinks!: " + newLaw;
  }

  console.log(cityBlock());
}

console.log(city());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;

  // Return a function that when invoked increments and returns a counter variable.
  return () => {
    count += 1;
    console.log(count);
  };
};

const newCounter = counter();
// Example usage: const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;

  // Return an object that has two methods called `increment` and `decrement`.
  return {
    increment: () => {
      return ++count;
    },
    decrement: () => {
      return --count;
    }
  };
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
const obj = counterFactory();
console.log(obj.increment());
console.log(obj.increment());

console.log(obj.decrement());
