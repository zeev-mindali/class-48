const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello from promise 1");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello from promise 2");
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello from promise 3");
  }, 1000);
});
