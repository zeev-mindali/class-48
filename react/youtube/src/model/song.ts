export class Song{
    public id:String;
    public songName:String;
    public songDesc:String;
    public songImage:String;
    public songCat:String;
    
    constructor(id:String,songName:String, songDesc:String, songImage:String,songCat:String){
        this.id=id;
        this.songName=songName;
        this.songDesc=songDesc;
        this.songImage=songImage;
        this.songCat=songCat;
    }
}