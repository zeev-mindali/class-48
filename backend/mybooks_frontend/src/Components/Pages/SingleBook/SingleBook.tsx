import { Books } from "../../Models/Books";
import "./SingleBook.css";

interface bookProps{
    book:Books;
}

function SingleBook(props:bookProps): JSX.Element {
    return (
        <div className="SingleBook Box">
			<h1>{props.book.book_name}</h1><hr/>
            <i><b>{props.book.fname} {props.book.lastname}</b></i>
            <p>{props.book.total_pages}</p>
            <p>{props.book.book_price}</p>
        </div>
    );
}

export default SingleBook;
