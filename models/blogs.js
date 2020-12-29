const {Model,DataTypes}=require('sequelize');//databae connectivity
const myDolphin=require('../connectivity/sequelCnnctn');

class Blogs extends Model{}

Blogs.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        title:{
            type:DataTypes.STRING,
            unique:true,
            validate:{
                notNull:{
                    message:'would you birth a child to not name them?'
                },
            },
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