const getUserData = new Promise((resolve, reject) => {
  const userData = {
    userId: 173,
    name: "Ilan",
    emailConfirmation: true,
    emailConfirmationDate: "12/01/2024",
  };
  if (userData) {
    resolve(userData);
  } else {
    reject(new Error("Error, no data"));
  }
});

const checkEmailConfirmation = (user) => {
  if (user.emailConfirmation)
    return Promise.resolve(user.emailConfirmationDate);
};

getUserData
  .then(checkEmailConfirmation)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
