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

const checkUserEmailConfirmation = async () => {
  try {
    const userData = await getUserData;
    const userEmailConfirmation = await checkEmailConfirmation(userData);
    console.log(userEmailConfirmation);
  } catch (error) {
    console.log(error);
  }
};

checkUserEmailConfirmation();
