var mysql = require('mysql2')

const mysqlconnection = mysql.createConnection({
    host : '127.0.0.1',
    user: 'root',
    password: 'root123',
    port: 3306,
    database: 'test11'
})

mysqlconnection.connect((err) => {
    if(err){
        console.log("ERROR : " +JSON.stringify(err))
    }else{
        console.log("DB Connection Successfull!!")
    }
})

module.exports = mysqlconnection;