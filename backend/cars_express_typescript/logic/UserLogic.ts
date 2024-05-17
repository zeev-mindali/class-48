import { UserCred } from "../Models/UserCred";
import { createJWT } from "../Utils/jwt";
const fs = require("fs");

const registerUser = (user: UserCred) => {
  let userInfo;
  try {
    userInfo = JSON.parse(fs.readFileSync("users.data"));
  } catch (err) {
    userInfo = [];
  }
  //check if user exists before saving the user.
  let singleUser = userInfo.find(
    (item: { userName: string }) => item.userName === user.userName
  );
  if (singleUser !== undefined) {
    console.log(singleUser);
    return false;
  }
  console.log(singleUser);
  if (user.userRole === "") {
    user.userRole = "Guest";
  }
  //add the new user to our file
  userInfo.push(user);
  fs.writeFileSync("users.data", JSON.stringify(userInfo));
  return true;
};

const loginUser = (user: UserCred) => {
  let userInfo;
  try {
    userInfo = JSON.parse(fs.readFileSync("users.data"));
  } catch (err) {
    userInfo = [];
  }
  //check the user and password send the password
  //return true / false
  let singleUser = userInfo.find(
    (item: { userName: string }) => item.userName === user.userName
  );

  //sending true/false if user data is o.k.
  //return singleUser.userName===user.userName && singleUser.userPass===user.userPass;

  //sending jwt if user data is o.k.
  try {
    if (
      singleUser.userName === user.userName &&
      singleUser.userPass === user.userPass
    ) {
      return createJWT(singleUser);
    } else {
      return "";
    }
  } catch (err) {
    console.log("no user found");
  }
};

const forgotPassword = (userName: string) => {
  let userInfo;
  try {
    userInfo = JSON.parse(fs.readFileSync("users.data"));
  } catch (err) {
    userInfo = [];
  }
  //find the user...
  let singleUser = userInfo.find(
    (item: { userName: string }) => item.userName === userName
  );
  if (singleUser === undefined) {
    return "";
  }
  return singleUser.userPass;
  //send back the password....
};

export { registerUser, loginUser, forgotPassword };
