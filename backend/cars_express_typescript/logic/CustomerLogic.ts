import dal_mysql from "../DAL/dal_mysql";

//SELECT EXAMPLES
const getAllCustomers = async()=>{
    //SQL statement
    const sql = "SELECT * FROM customers";
    //execute the sql command
    const allCustomers = await dal_mysql.execute(sql);
    //return the result
    return allCustomers;
}

const getTargil1 = async()=>{
    const sql = `
        SELECT categories.CategoryName, products.ProductName FROM categories
        INNER JOIN products
        ON categories.CategoryID = products.CategoryID
        WHERE categories.CategoryName LIKE '%c%'
    `;

    const getResult = await dal_mysql.execute(sql);
    return getResult;
}

//INSERT EXAMPLES


export default {
    getAllCustomers,
    getTargil1,
}