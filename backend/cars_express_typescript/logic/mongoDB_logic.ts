

//CRUD -> Create Read Update Delete

import { ICatModel } from "../Models/catMode_mongoDB";
import { videoNotFound } from "../Models/ClientsErrors";
import { ISongModel } from "../Models/SongMongoDB";


//Create (sql: insert into songs)
const addSong = (newSong:ISongModel):Promise<ISongModel> => {
    //before we sending data to the mongoDB, we need to validate the data
    const errors = newSong.validateSync(); 
    if (errors) throw new videoNotFound(errors.message);
    return newSong.save();
}

//create category new item
const addCat = (newCategory:ICatModel):Promise<ICatModel> => {
    const errors = newCategory.validateSync();
    if (errors) throw new videoNotFound(errors.message);
    return newCategory.save();
}

export {
    addSong,
    addCat,

}