// "Swiggy | Machine Coding: Recursive Array Flattening
// Question: Implement a polyfill for Array.prototype.flat(). Your implementation must handle the depth argument correctly.

// const nestedData = [2, [7, 8]]];

/**
 * @param {Array} arr
 * @param {number} depth
 */
function customFlat(arr, depth = 1) {
  // Your recursive implementation here
}

console.log(customFlat(nestedData, 1)); // [3, [7, 8]]
console.log(customFlat(nestedData, 2)); // [7, 8]
console.log(customFlat(nestedData, Infinity)); // [9, 10, 11, 7, 8, 12]"

// Code:

// Recursive solution
function customFlat(arr, depth = 1) {
    const res = [];

    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i]) && depth > 0) {
            res.push(...customFlat(arr[i], depth-1));
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

// Reduce solution
function customFlat(arr, depth = 1) {
    return arr.reduce((acc, currItem) => {
        if(Array.isArray(currItem) && depth > 0) {
            acc.push(...customFlat(currItem, depth-1));
        } else {
            acc.push(currItem);
        }
        return acc;
    }, []);
}