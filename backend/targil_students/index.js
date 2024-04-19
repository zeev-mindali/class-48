const express = require("express");
const APP = express();
const PORT = 8080;
const HOST = "localhost";

const myStudents = [
  { id: 1, name: "student1", grade: 50 },
  { id: 2, name: "student2", grade: 70 },
  { id: 3, name: "student3", grade: 90 },
  { id: 4, name: "student4", grade: 800 },
  { id: 5, name: "student5", grade: 100 },
  { id: 6, name: "student6", grade: 20 },
  { id: 7, name: "student7", grade: 90 },
  { id: 8, name: "student8", grade: 85 },
  { id: 9, name: "student9", grade: 55 },
  { id: 10, name: "student10", grade: 0 },
];

APP.get("/list", (req, res) => {
  res.send(myStudents);
});

//junior
// APP.get("/list/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const singleVictim = myStudents.find(singleVictim => singleVictim.id === id);
//   res.send(singleVictim);
// });

//senior
APP.get("/list/:id", (req, res) => {    
    res.send(
        myStudents.find(singleVictim => singleVictim.id == req.params.id)
    );
});

APP.listen(PORT,HOST,()=>{
    console.log(`http://${HOST}:${PORT}`);
});
