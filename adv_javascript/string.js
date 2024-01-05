var s = "hello, world :(";
console.log(s[0]);
console.log(s.charAt(0));

var firstName = "Zeev";
var lastName = "Mindali";

var str = "first name:" + firstName + " last name:" + lastName;
var str2 = `first name: ${firstName} last name: ${lastName}`;
var str3 = `
   first name: ${firstName}
   last name: ${lastName}
`;
console.log(str3);
