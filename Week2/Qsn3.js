// "### **Meta (Facebook) | Technical Trivia: Context in Arrow Functions**

// **Question:** What will be the output? Can the context of `greet` be changed using `.call()`? Why or why not?

const profile = {
  userName: 'Vasanth',
  greet: () => {
    console.log(`Hi, I'm ${this.userName}`);
  },
  welcome: function() {
    console.log(`Welcome, ${this.userName}`);
  }
};

const friend = { userName: 'Candidate' };

profile.greet.call(friend); 
profile.welcome.call(friend);

// Output:
// Hi, I'm undefined
// Welcome, Candidate

// // Explanation:
// Hi, I'm undefined - Since greet is an arrow function. 
// Arrow functions do not have their own this. this refers to window (non -strict) or strict mode its undefined.
// profile.greet.call(friend) has NO effect on this for arrow functions.

// Welcome, Candidate - Regular function. Regular functions have a dynamic this
// this is determined by how the function is called.
// profile.welcome.call(friend) explicitly sets this to friend.

// Can the context of `greet` be changed using `.call()`? Why or why not?
// No, Arrow functions ignore .call(), .apply(), and .bind(). 
// Their this is fixed at creation time