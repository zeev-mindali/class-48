const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello from promise 1");
  }, 4000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello from promise 2");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello from promise 3");
  }, 3000);
});

// promise1
//   .then((result) => console.log(result))
//   .catch((error) => {
//     console.log(error);
//   });

// promise2
//   .then((result) => console.log(result))
//   .catch((error) => {
//     console.log(error);
//   });

// promise3
//   .then((result) => console.log(result))
//   .catch((error) => {
//     console.log(error);
//   });

// console.log("me finished");

//run all promises
// Promise.all([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//     console.log("finished");
//   })
//   .catch((error) => {
//     console.log("error");
//   });

//return the first promise that finished
// Promise.race([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//     console.log("finished");
//   })
//   .catch((error) => {
//     console.log("error");
//   });

//get any resolve, if all is rejected , then catch error
Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
    console.log("finished");
  })
  .catch((error) => {
    console.log("error");
  });

Promise.allSettled([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
    console.log("finished");
  })
  .catch((error) => {
    console.log("error");
  });
