const {Model,DataTypes, STRING}=require('sequelize');//databae connectivity
const sequelize=require('../connectivity/sequelCnnctn');

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
            allowNull:false,
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
        content:{
            type:DataTypes.STRING,
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
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:false,
        modelName:'blogs',
    }
);
module.exports=Blogs;