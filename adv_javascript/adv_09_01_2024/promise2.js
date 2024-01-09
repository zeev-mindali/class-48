const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("and the winner is : ILAN !!!!");
    reject("No winner found");
  }, 5000);
});

const myFunction = async () => {
  try {
    console.log(await myPromise);
  } catch (tauatish) {
    console.log("error: ", tauatish);
  }
};

console.log("looking for the winner of new MayBach");
console.log(myFunction());
