import dal_mysql from "../DAL/dal_mysql";


const getAllProducts = async()=>{
    //SQL statement
    const sql = "SELECT * FROM prod";
    //execute the sql command
    const allProducts = await dal_mysql.execute(sql);
    //return the result
    return allProducts;
}

const setProductsQty = async(id:number,qty:number)=>{
    //SQL statement
    const sql = `UPDATE prod SET prod.qty=${qty}, time=${new Date()} WHERE id=${id}`;
    // execute the sql
    await dal_mysql.execute(sql);
    return;
}

export default {
    getAllProducts,
    setProductsQty
}