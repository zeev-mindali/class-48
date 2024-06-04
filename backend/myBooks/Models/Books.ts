export class Books{
    id:number;
    authorId:number; //Forigen key
    bookName:string;
    totalPages:number;
    bookPrice:number;

    constructor(id:number,authorId:number,bookName:string,totalPages:number,bookPrice:number){
        this.id=id;
        this.authorId=authorId;
        this.bookName=bookName;
        this.totalPages=totalPages;
        this.bookPrice=bookPrice;
    }
}

