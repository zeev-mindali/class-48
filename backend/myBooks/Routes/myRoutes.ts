import express, {NextFunction,Request,Response} from 'express';
import { Books } from '../Models/Books';
import { getAllAuthors } from '../logic/AuthorLogic';
import {getAllBooks} from '../logic/BooksLogic';
const booksRouter = express.Router();
const authorsRouter = express.Router();


//author , get all authors
//books, get all books, add new book, delete book

authorsRouter.get("/all",async (request:Request,response:Response,next:NextFunction)=>{
    try{
        const authors = await getAllAuthors();
        response.status(200).json(authors);
    } catch (err){
        next (err); 
    }
})

booksRouter.get("/all", async (request:Request,response:Response,next:NextFunction)=>{
    try{
        const books = await getAllBooks();
        response.status(200).json(books);
    } catch (err){
        next (err); 
    }
})

booksRouter.post("/add",async (request:Request,response:Response,next:NextFunction)=>{
    try{
        const newBook = new Books(request.body.id,request.body.authorId,request.body.bookName,request.body.totalPages,request.body.bookPrice);
        // const addedBook = await BooksLogic.addBook(newBook);
        // response.status(201).json(addedBook);
    } catch (err){
        next (err); 
    }
})

booksRouter.delete("/delete/:id",async (request:Request,response:Response,next:NextFunction)=>{
    try{
        const id = request.params.id;
        //const deletedBook = await bookLogic.deleteBook(id);
        //response.status(200).json(deletedBook);
    } catch (err){
        next (err); 
    }
})

export {booksRouter,authorsRouter};

