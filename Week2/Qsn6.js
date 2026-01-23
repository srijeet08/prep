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


// Code:

function deepClone(value, map = new WeakMap()) {

    // handle primitives
    if(value === null || typeof value !== 'object') {
        return value;
    }

    // handle circular ref
    if(map.has(value)) {
        return map.get(value);
    }

    const clone = Array.isArray(value) ? [] : {};

    map.set(value, clone);

    for(const key in value) {
        if(value.hasOwnProperty(key)) {
            clone[key] = deepClone(value[key], map);
        }
    }

    return clone;

}