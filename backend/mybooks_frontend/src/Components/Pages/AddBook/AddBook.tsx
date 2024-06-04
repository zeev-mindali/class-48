import { useEffect, useState } from "react";
import "./AddBook.css";
import { Author } from "../../Models/Author";

function AddBook(): JSX.Element {
    const [authors,setAuthors]=useState<Author[]>([]);
    useEffect(()=>{
        fetch("http://localhost:8080/api/v1/author/all")
        .then(response=>response.json())
        .then(data=>setAuthors(data));
    },[]);
    return (
        <div className="AddBook Box">
			<h1>Add Book</h1>
                <form>
                    <input type="text" placeholder="Book Name" /><br/><br/>
                    <input type="number" placeholder="Total Pages" /><br/><br/>
                    <input type="number" placeholder="Book Price" /><br/><br/>
                    <select>
                        {authors.map(item=><option>{item.fname} {item.lastname}</option>)}
                    </select><br/><br/>
                    <button>Add Book</button>
                </form>
        </div>
    );
}

export default AddBook;
