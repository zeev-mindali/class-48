import { Route, Routes } from "react-router-dom";
import "./mainRoute.css";
import Page404 from "../../Pages/Page404/Page404";
import Main from "../../Layout/Main/Main";
import AddBook from "../../Pages/AddBook/AddBook";
import BookList from "../../Pages/BookList/BookList";
import AddAuthor from "../../Pages/AddAuthor/AddAuthor";
import AuthorsList from "../../Pages/AuthorsList/AuthorsList";

function MainRoute(): JSX.Element {
    return (
        <div className="mainRoute">
			<Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/addBook" element={<AddBook/>}/>
                <Route path="/bookList" element={<BookList/>}/>
                <Route path="/addAuthor" element={<AddAuthor/>}/>
                <Route path="/authorsList" element={<AuthorsList/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default MainRoute;
