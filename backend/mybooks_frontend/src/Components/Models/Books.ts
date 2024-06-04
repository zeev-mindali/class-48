export class Books{
    id:number;
    book_name:string;
    total_pages:number;
    book_price:number;
    fname:string;
    lastname:string;
    author_id:number;
    constructor(id:number,book_name:string,total_pages:number,book_price:number,fname:string,lastname:string,author_id:number){
        this.id=id;
        this.book_name=book_name;
        this.total_pages=total_pages;
        this.book_price=book_price;
        this.fname=fname;
        this.lastname=lastname;
        this.author_id=author_id;
    }
}

