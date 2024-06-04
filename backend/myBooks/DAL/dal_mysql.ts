//DAL -> Data Abstract Layer
//mysql -> npm install mysql

//create connection to mysql
import mysql from "mysql2";
import config from "../Utils/config";

const connection = mysql.createPool({
    host: config.mySQLhost,
    user: config.mySQLuser,
    password: config.mySQLpassword,
    database: config.mySQLdb
});

console.log("connected to mysql database");

const execute = (sql: string):Promise<any>=>{
    return new Promise<any>( //to promisify an asynchronous function 
        (resolve,reject)=>{
            //execute the sql on mysql server
            connection.query(sql,(err,result)=>{
                //if we got an error, exit with reject and return
                if (err){
                    console.log(err);
                    reject(err);
                    return;
                }
                //return the result
                resolve(result);
            });
        }
    );
}

export default {
    execute,
}