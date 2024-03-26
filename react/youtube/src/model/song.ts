export class Song{
    public id:String;
    public songName:String;
    public songDesc:String;
    public songImage:String;
    
    constructor(id:String,songName:String, songDesc:String, songImage:String){
        this.id=id;
        this.songName=songName;
        this.songDesc=songDesc;
        this.songImage=songImage;
    }
}