

//CRUD -> Create Read Update Delete

import { ICatModel } from "../Models/catMode_mongoDB";
import { ClientError, videoNotFound } from "../Models/ClientsErrors";
import { ISongModel, SongModel } from "../Models/SongMongoDB";


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
    if (errors) throw new ClientError(400,"errors:\n"+errors)
    return newCategory.save();
}


// R E A D  => select * from

//select * from songs
const getAllSongs = async():Promise<ISongModel[]> => {
    //get all songs without virtual fields
    //return SongModel.find().exec();

    //get all songs with cirtual fields
    return SongModel.find().populate("category").exec();
}

//select * from songs where id = ???
const getSongById = async(id:string):Promise<ISongModel>=>{
    //const singleSong = await SongModel.findById(id).exec();
    const singleSong = await SongModel.findById(id).populate("category").exec();
    if (!singleSong) throw new videoNotFound(`id ${id} is not in the system`);
    return singleSong;
}

//update 
const updateSong = async (song:ISongModel):Promise<ISongModel>=>{
    const errors = song.validateSync();
    if (errors) throw new ClientError(400,errors.toString());
    const updateSong = await SongModel.findByIdAndUpdate(song._id, song,{returnOriginal: false,}).exec();
    if (!updateSong) throw new videoNotFound(`video was not found by id: ${song._id}`);
    return updateSong;
}

//delete from songs........
const deleteSong = async(id:string):Promise<void>=>{
    const deleteSong = await SongModel.findByIdAndDelete(id).exec();
    if (!deleteSong) throw new ClientError(400,`${id} was not found....`);
}


//select title,url from songs
const getPartialSongInfo = ():Promise<ISongModel[]>=>{
    return SongModel.find({},{title:true, url:true, _id:false}).exec();

}

export {
    addSong,
    addCat,
    getAllSongs,
    getSongById,
    updateSong,
    deleteSong,
    getPartialSongInfo
}
