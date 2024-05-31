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


//INSERT EXAMPLES


export default {
    getAllCustomers,
    
}