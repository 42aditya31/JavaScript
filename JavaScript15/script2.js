// ==========================
// 1. Callback Functions Example
// --------------------------
// A callback function is a function passed as an argument to another function.
// Here, we simulate an asynchronous operation using setTimeout.

function fetchDataCallback(successCallback, errorCallback) {
    setTimeout(() => {
      const data = "Callback Data";
      // Simulate random error: if random > 0.5, it's a success; otherwise, error.
      if (Math.random() > 0.5) {
        successCallback(data);
      } else {
        errorCallback("Error: Failed to fetch data in callback.");
      }
    }, 1000);
  }
  
  // Using the callback function with error handling:
  fetchDataCallback(
    data => {
      console.log("Callback Success:", data);
    },
    error => {
      console.error("Callback Error:", error);
    }
  );
  
  // ==========================
  // 2. Pyramid of Doom (Callback Hell)
  // --------------------------
  // When callbacks are nested deeply, it leads to hard-to-read code (pyramid of doom).
  
  function step1(callback) {
    setTimeout(() => {
      console.log("Step 1 complete");
      callback("Data from step1");
    }, 500);
  }
  
  function step2(input, callback) {
    setTimeout(() => {
      console.log("Step 2 complete with:", input);
      callback("Data from step2");
    }, 500);
  }
  
  function step3(input, callback) {
    setTimeout(() => {
      console.log("Step 3 complete with:", input);
      callback("Data from step3");
    }, 500);
  }
  
  // Nested callbacks leading to a pyramid structure:
  step1(data1 => {
    step2(data1, data2 => {
      step3(data2, data3 => {
        console.log("All steps complete:", data3);
      });
    });
  });
  
  // ==========================
  // 3. Promises Example
  // --------------------------
  // A Promise is an object representing the eventual completion or failure of an async operation.
  
  function fetchDataPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Promise Data";
        if (Math.random() > 0.5) {
          resolve(data); // Operation successful
        } else {
          reject("Error: Failed to fetch data in Promise."); // Operation failed
        }
      }, 1000);
    });
  }
  
  // Consuming promises with then() & catch() for handling success and errors:
  fetchDataPromise()
    .then(data => {
      console.log("Promise Success:", data);
      // Return a new promise to demonstrate promise chaining.
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Chained Data");
        }, 500);
      });
    })
    .then(chainedData => {
      console.log("Chained Promise Success:", chainedData);
    })
    .catch(error => {
      console.error("Promise Error:", error);
    });
  
  // ==========================
  // 4. Attaching Multiple Handlers to a Single Promise
  // --------------------------
  // You can attach multiple then() handlers to the same promise.
  const multiHandlerPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Multi-handler Data");
    }, 1000);
  });
  
  multiHandlerPromise.then(data => {
    console.log("Handler 1 received:", data);
  });
  
  multiHandlerPromise.then(data => {
    console.log("Handler 2 received:", data);
  });
  
  // ==========================
  // 5. Promise API Methods: Promise.all & Promise.race
  // --------------------------
  // Promise.all waits for all promises to resolve and returns an array of results.
  // Promise.race returns the result of the first promise that resolves (or rejects).
  
  const promise1 = new Promise(resolve => {
    setTimeout(() => resolve("Promise1 complete"), 1000);
  });
  
  const promise2 = new Promise(resolve => {
    setTimeout(() => resolve("Promise2 complete"), 1500);
  });
  
  // Using Promise.all:
  Promise.all([promise1, promise2])
    .then(results => {
      console.log("Promise.all results:", results);
    })
    .catch(error => {
      console.error("Promise.all error:", error);
    });
  
  // Using Promise.race:
  Promise.race([promise1, promise2])
    .then(result => {
      console.log("Promise.race result:", result);
    })
    .catch(error => {
      console.error("Promise.race error:", error);
    });
  