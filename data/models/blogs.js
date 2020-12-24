const {Model,DataTypes}=require('sequelize');//databae connectivity
const connectivity=require('../connectivity/sequelCnnctn');

class Blogs extends Model{}

Blogs.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        //more to come...
    }
)