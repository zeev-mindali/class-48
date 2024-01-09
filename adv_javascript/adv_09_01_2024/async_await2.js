// const myFunction = async () => {
//   return " Semyon the king";
// };

// async function myFunction() {
//   return " Semyon the king";
// }
async function myFunction() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Semyon the king and Yeroslav the rich");
    }, 5000);
  });
  let result = await promise;
  console.log(result);
}
//myFunction().then((msg) => console.log(msg));
myFunction();
console.log("i am the king of the world");
