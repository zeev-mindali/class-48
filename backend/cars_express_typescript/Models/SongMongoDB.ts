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
        url : {
            type : String,
            required: [true, "missing url address"],
            minlength: [3, "url too short"],
            maxlength: [255, "url too long"],
            trim: true,
            unique: true,
        },
        title: {
            type: String,
            required: [true, "missing title address"],
            minlength: [3, "title too short"],
            maxlength: [255, "title too long"],
            trim: true,
            unique: false,
        },
        songImg: {
            type: String,
            minlength:[3, "song image too short"],
            maxlength: [255, "song image too long"],
            trim: true,
            unique: true,
        },
        videoFile: {
            type: String,
            minlength: [3, "video file too short"],
            maxlength: [255, "video file too long"],
            trim: true,
            unique: true,
        },
        category: {
            type: Schema.Types.ObjectId, //foreign key, will point on object id
        }

    },{
        versionKey: false, //do not create _v field for versioning...
        toJSON: {virtuals: true} //when converting db to json, allow bring virtual fields
        //id: false //do not duplicate _id into id field
    }
);

SongSchema.virtual("categoryName", {
    ref: CatModel, //which model are you describing
    localField: "category", //which field in our model is it
    foreignField: "_id", //which field on category model is it
    justOne: true, //category is a single object and not an array
});
export const SongModel = model<ISongModel>("SongModel", SongSchema, "songs");
 /*
    just one: (one to one)
    {
        "_id": f483fj984f,
        "category": "rock songs"
    }


    many (justOne: false) (one to many)
    {
        "_id" : fh383f3ffg,
        "category": [
            "rock songs" ,"80's songs", "gabriel hate songs"
        ]
    }
 */