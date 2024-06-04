import { useEffect, useState } from "react";
import "./BookList.css";
import { Books } from "../../Models/Books";
import SingleBook from "../SingleBook/SingleBook";

function BookList(): JSX.Element {
    const [books,setBooks] = useState<Books[]>([]);
    useEffect(()=>{
        fetch("http://localhost:8080/api/v1/books/all")
        .then(response=>response.json())
        .then(data=>{
            setBooks(data);
            console.log(data);
        });
    },[]);
    return (
        <div className="BookList">
			{books.map(item=><SingleBook key={item.id} book={item}/>)}
        </div>
    );
}

export default BookList;
