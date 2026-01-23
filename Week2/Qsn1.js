// "Question 1: ### **Uber | Machine Coding: Asynchronous Task Runner (Concurrency Limit)**

// **Question:** Imagine Uber is fetching data for 100 nearby drivers. To avoid hitting API rate limits or crashing the browser with too many simultaneous requests, you must implement a 
// ""Batch Runner.""

// Write a function `promiseAllWithConcurrencyLimit` that takes an array of ""task functions"" (functions that return a promise) and a limit `limit`. It should execute no more than `limit` tasks 
// at any given time. As soon as one task finishes, the next one in the queue should start.


// /**
//  * @param {Array<() => Promise<any>>} tasks - Array of functions returning promises
//  * @param {number} limit - Maximum concurrent executions
//  */
// async function promiseAllWithConcurrencyLimit(tasks, limit) {
//   // TODO: Your implementation
// }

// // --- Input Data for Testing ---
// const createDriverTask = (id, delay) => () => 
//   new Promise((resolve) => {
//     console.log(` Fetching Driver ${id}...`);
//     setTimeout(() => {
//       console.log(` Driver ${id} loaded`);
//       resolve(`Data for Driver ${id}`);
//     }, delay);
//   });

// const tasks =;

// // If limit is 2, Task 1 and 2 start. 
// // When Task 2 finishes at 0.5s, Task 3 starts immediately.
// promiseAllWithConcurrencyLimit(tasks, 2).then(results => {
//   console.log(""All tasks completed:"", results);
// });"
// "Question 2: ### **Microsoft | Technical Round: The Microtask Priority Riddle**

// **Question:** Predict the exact output. Explain why the `asyncFn` behaves differently than a standard promise chain.

// console.log('1 - Sync');

// setTimeout(() => {
//   console.log('2 - Macrotask');
// }, 0);

// async function asyncFn() {
//   console.log('3 - Inside Async');
//   await Promise.resolve();
//   console.log('4 - After Await');
// }

// asyncFn();

// Promise.resolve().then(() => {
//   console.log('5 - Microtask');
// });

// console.log('6 - Sync End');"
// "### **Meta (Facebook) | Technical Trivia: Context in Arrow Functions**

// **Question:** What will be the output? Can the context of `greet` be changed using `.call()`? Why or why not?

// const profile = {
//   userName: 'Vasanth',
//   greet: () => {
//     console.log(`Hi, I'm ${this.userName}`);
//   },
//   welcome: function() {
//     console.log(`Welcome, ${this.userName}`);
//   }
// };

// const friend = { userName: 'Candidate' };

// profile.greet.call(friend); 
// profile.welcome.call(friend);"
// "Swiggy | Machine Coding: Recursive Array Flattening
// Question: Implement a polyfill for Array.prototype.flat(). Your implementation must handle the depth argument correctly.

// const nestedData = [2, [7, 8]]];

// /**
//  * @param {Array} arr
//  * @param {number} depth
//  */
// function customFlat(arr, depth = 1) {
//   // Your recursive implementation here
// }

// console.log(customFlat(nestedData, 1)); // [3, [7, 8]]
// console.log(customFlat(nestedData, 2)); // [7, 8]
// console.log(customFlat(nestedData, Infinity)); // [9, 10, 11, 7, 8, 12]"
// "Flipkart | Machine Coding Round: Robust Debounce Utility
// Question: Implement a debounce utility. The interviewer will likely ask for the ""Immediate/Leading"" flag as a follow-up

// function debounce(func, wait, immediate = false) {
//   let timeout;
//   // TODO: Logic to clear timeout and handle 'this' context
// }

// // Usage in UI:
// const onSearch = debounce((e) => console.log(""Searching for:"", e.target.value), 300);
// // document.getElementById('search').addEventListener('input', onSearch);"
// "Atlassian | Machine Coding: The Ultimate Deep Clone
// ### **Question:** Implement `deepClone(obj)`. It must handle circular references. Atlassian specifically checks for memory efficiency and handling of nested structures without
//  using `JSON.stringify`.

// function deepClone(value, map = new WeakMap()) {
//   // 1. Base case: handle primitives
//   // 2. Handle circular references using map
//   // 3. Recursive cloning for Arrays and Objects
// }

// const original = {
//   a: 1,
//   b: { c: 2 },
//   d: [11, 7],
// };
// original.self = original; // Circular reference!

// const copy = deepClone(original);
// console.log(copy!== original); // true
// console.log(copy.b!== original.b); // true
// console.log(copy.self === copy); // true (circularity preserved)"
// "Zeta | Technical Round: Deep Equality Utility
// Question: Implement isDeepEqual(obj1, obj2). This is essential in frontend development for optimizing re-renders in components where you only want to update if the data actually changed.

// function isDeepEqual(obj1, obj2) {
//   // 1. Check if same reference
//   // 2. Check types
//   // 3. Recursive key-by-key comparison
// }

// // --- Test Cases ---
// const profileA = { name: ""Vasanth"", roles: [""admin"", ""mentor""], meta: { id: 1 } };
// const profileB = { name: ""Vasanth"", roles: [""admin"", ""mentor""], meta: { id: 1 } };
// const profileC = { name: ""Vasanth"", roles: [""admin""], meta: { id: 1 } };

// console.log(""Test 1 (Identical):"", isDeepEqual(profileA, profileB)); // Expected: true
// console.log(""Test 2 (Different Roles):"", isDeepEqual(profileA, profileC)); // Expected: false
// console.log(""Test 3 (Nested Change):"", isDeepEqual(profileA, {...profileB, meta: { id: 2 } })); // Expected: false
// console.log(""Test 4 (Primitive):"", isDeepEqual(10, 10)); // Expected: true"
// "### **Adobe | Conceptual Round: Spread Operator Pitfall**

// **Question:** What will be logged? How do you fix this using the spread operator while keeping the code readable?

// const state = {
//   user: { id: 101, details: { city: 'Bangalore' } },
//   theme: 'dark'
// };

// const newState = {...state };
// newState.user.details.city = 'Chennai';

// console.log(state.user.details.city); 
// // Expected output? Why did it change?"