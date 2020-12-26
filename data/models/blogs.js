const {Model,DataTypes, NOW}=require('sequelize');//databae connectivity
const myDolphin=require('../connectivity/sequelCnnctn');
const askMaid=require('')

class Blogs extends Model{}
//blogs will belong to users

Blogs.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        author:{
            type:DataTypes.STRING,
            allowNull:false,            
        },
        dateCreated:{
            type:DataTypes.DATE,
            allowNull:false,
            defaultValue:DataTypes.NOW,
        },
        userId:{
            type:DataTypes.INTEGER,
            references:{
                model:'user',
                key:'id',
            },
        },
    },
    {
        myDolphin,
        timestamps:false,
        freezeTableName:true,
        underscored:false,
        modelName:'blogs',
    }
);
module.exports=Blogs;