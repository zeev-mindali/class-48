import { Document, Schema, model } from "mongoose";

//how the information will look like : name:string;
export interface ICatModel extends Document{
    //don't specify the _id here !!!!!!
    name:String;
}

//create schema (like we did in workbench, by creating table)
const CatSchema = new Schema<ICatModel>(
    {
        name:{
            type:String, //type of the field
            required: [true, "missing category name"], //is it required and error code
            minlength: [ 3, "name too short"], //minimum length and error code
            maxlength: [255, "name too long"], //maximum length and error code
            trim: true, //clear white spaces :zeev      mindali > zeev mindali
            unique: true //is it unique
        }
    }, {
        versionKey: false, //do not create _v field for versioning
    }
);

//export our new model
export const CatModel = model<ICatModel>("catModel", CatSchema, "categories");