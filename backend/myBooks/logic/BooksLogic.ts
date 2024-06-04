import { Books } from '../Models/Books';
import dal_mysql from '../dal/dal_mysql';

const getAllBooks = async ()=>{
    //sql statement
    const sql = `
        SELECT *, \`author\`.fname, \`author\`.lastname FROM books
        INNER JOIN \`author\`
        ON \`books\`.author_id = \`author\`.id
    `;
    //execute the sql statement
    return await dal_mysql.execute(sql);
}

const addNewBook = async (newBook:Books)=>{
    const sql = `INSERT INTO books (author_id, book_name, total_pages, book_price) 
    VALUES (${newBook.authorId}, '${newBook.bookName}', ${newBook.totalPages}, ${newBook.bookPrice})`;
    return await dal_mysql.execute(sql);
}

export {getAllBooks};

