const {Model,DataTypes}=require('sequelize');
const encryption=require('bcrypt');
const myDolphin=require('../connectivity/sequelCnnctn.js');

//logic to incorporate within rout
class User extends Model{
    checkPassword(loginPw){
        return encryption.campareSync(loginPw,this.password);
    }
}

User.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                isEmail:true,
            },
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[6,15],
            },
        },
    },
    {
        hooks:{
            beforeCreate:async newUserData=>{
                newUserData.password=await encryption.hash(newUserData.password,12);
                return newUserData;
            },
            beforeUpdate:async updatedUserData=>{
                updatedUserData.password=await encryption.hash(updatedUserData.password,12);
                return updatedUserData;
            },
        },
        myDolphin,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName:'user',
    }
);
module.exports=User;