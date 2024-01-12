// console.log("Hello world");
// console.log("Hello Haifa");
// console.log("Hello Johnbryce");

const sayHi = (greetText) => console.log(`${greetText}`);
//sayHi("Hello my brother from another mother");

const sayHello = (name, dayTime, callbackFunction) => {
  const greetingText = `${name}, good ${dayTime}!!`;
  callbackFunction(greetingText);
};

//sayHello("Gabriel", "morning", sayHi);

//callback hell
// getData(function (result1) {
//   getMoreData(result1, function (result2) {
//     getMoreData(result2, function (result3) {
//       getMoreData(result3, function (result4) {
//         console.log(result4);
//       });
//     });
//   });
// });

const promise1 = new Promise((resolve, reject) => {
  if (true) resolve("success!!!");
  else reject(new Error("error!"));
});

promise1
  .then((result) => onSuccess(result))
  .catch((error) => onError("Error!!!"));

const onSuccess = (result) => {
  console.log("Gabriel, made it, first time no reject");
  console.log(result);
};

const onError = (error) => {
  console.log("Huston we have a problem (apollo 13)");
  console.log(error);
};
