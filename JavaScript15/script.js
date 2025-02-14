// A callback function is a function passed as an argument to another function and executed later.
function greet(name, callback) {
  console.log("hello " + name);
  callback();
}
function saybye() {
  console.log("B Bye ");
}
greet("aditya", saybye);

// A Promise is a better way to handle asynchronous code than callbacks.
let myPromise = new Promise((resolve, reject) => {
    let success = true;  // Change to false to simulate an error
  
    setTimeout(() => {
      if (success) {
        resolve("Promise resolved: Data received");
      } else {
        reject("Promise rejected: Failed to fetch data");
      }
    }, 2000);
  });
  