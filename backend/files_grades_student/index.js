const fs = require('fs'); //calling file system libraries...

//create json object with inner array
let grades = [
    {"name":"zeev",grade:0},
    {"name":"amital",grade:100},
    {"name":"ilan",grade:90},
    {"name":"nipo",grade:55},
    {"name":"matti",grade:98},
    {"name":"shirly",grade:100},
    {"name":"sasson",grade:0},
    {"name":"hilda",grade:0},
]

fs.writeFileSync("grades.json",JSON.stringify(grades));
console.log("we have the file :)");