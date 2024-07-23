import { Document,Schema,model } from "mongoose";
import { CatModel } from "./catMode_mongoDB";


//model interface describing the data in the model
export interface ISongModel extends Document{
    //don't specify the _id here !!!!
    url:string;
    title:string;
    songImg:string;
    category: Schema.Types.ObjectId; //foreign key to Category id
    videoFile:string;
}

const SongSchema = new Schema<ISongModel>(
    {
        //url,title,songImg, videoFile
    }
);