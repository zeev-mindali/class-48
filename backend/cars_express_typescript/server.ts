import bodyParser from "body-parser"
import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import config from "./Utils/config"
import carRouter from "./Routes/vehicles";
import ErrorHandler from "./MiddleWare/routeNotFound";
import loginRouter from "./Routes/login";
import customerRouter from "./Routes/customersRouter";
import dal__mongodb from "./DAL/dal__mongodb";
import { addCat, addSong, getAllSongs, getPartialSongInfo } from "./logic/mongoDB_logic";
import { CatModel } from "./Models/catMode_mongoDB";
import { SongModel } from "./Models/SongMongoDB";

//import ErrorHandler
//import router 
//import carRouter

//create server
const server = express();
const isAdmin = false;

//configure cors
//origin => מאיפה מגיעה הבקשה
//verbs => GET POST DELETE UPDATE PATCH
//Allowed Headers => Authorization
//Exposed Headers => Authorization
//optionsSuccessStatus => 200,204

//use Cors Option
const corsOptions = {
    origin: "*", //allow any origin
    methods: ["GET", "POST"], //which methods i will allow
    allowedHeaders: ["Content-Type", "Authorization"], //which headers i will get
    exposedHeaders: ["Authorization"] //which headers i will expose
}

const serverCors = {
    origin: "192.168.60.53",
    methods: ["POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Authorization"]
}

//cors = cross origin research sharing...
server.use(cors(isAdmin ? serverCors : corsOptions));

//how we send the data back (JSON,XML,RAW,String)
server.use(express.json());

//where i will save my files from upload
server.use(express.static("upload"));

//enable file uploading, and create a path for the files if it no exists
server.use(fileUpload({ createParentPath: true }));

//using routes = > http://localhost:8080/api/v1/transport
//http://127.0.0.1:8123/api/v1/transport/cars/6225433
server.use("/api/v1/transport", carRouter);
server.use("/api/v1/login", loginRouter);
server.use("/api/v1/customer", customerRouter)
//404 handler
server.use("*", ErrorHandler);

//make the connection to mongoDB
dal__mongodb.connect();

//add new Category
// try {
//     let result = addCat(new CatModel(
//         {
//             name: "pop3"
//         }
//     )).then(res => {
//         console.log(res);
//     });

// } catch (err: any) {
//     if (err.code=="11000") console.log("duplicated value");
// }

//add new songs
// addSong(new SongModel(
//     {
//         url: "https://www.youtube.com/watch?v=TOxk7wPma4Y",
//         title: "הרב פנגר - תעוף על עצמך - שיעור מצחיק עד דמעות!!",
//         songImg: "https://storage.hidabroot.org/articles_new/274183_tumb_750Xauto.jpg",
//         videoFile: "https://www.youtube.com/watch?v=TOxk7wPma4Y",
//         category: "66a343bc5aa55550d8b435e6"
//     }
// ))

// addSong(new SongModel(
//     {
//         url: "https://www.youtube.com/watch?v=cIuYFCAJ2a8",
//         title: "Maneskin-Beggin' (CD Audio)",
//         songImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Maneskin_2018.jpg/220px-Maneskin_2018.jpg",
//         videoFile: "https://www.youtube.com/watch?v=cIuYFCAJ2a8",
//         category: "66a344041f8cb6a73038d5d1"
//     }
// ))

//get all songs
// console.log("getting all songs");
// getAllSongs().then (res=>{
//     console.log(res);
// })

// getPartialSongInfo().then(res=>{
//     console.log(res);
// })


//start the server
server.listen(config.webPort, () => {
    console.log(`listing on http://${config.webHost}:${config.webPort}`);
})