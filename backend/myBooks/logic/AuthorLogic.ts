import dal_mysql from '../dal/dal_mysql';

const getAllAuthors = async ()=>{
    //sql statement
    const sql = "SELECT * FROM author";
    //execute the sql statement
    return await dal_mysql.execute(sql);
}

export {getAllAuthors};

