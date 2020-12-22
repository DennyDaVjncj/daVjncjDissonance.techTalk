const Sequelize=require('sequelize');
require('dotenv').config();
let myDolphin;

if(process.env.JAWSDB_URL){
    myDolphin=new Sequelize(process.env.JAWSDB_URL);
}else{
    myDolphin=new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PW,
        {
            host:'localhost',
            dialect:'mysql',
            port:3306
        }
    );
}
module.exports=myDolphin;