// const {Model,DataTypes}=require('sequelize');
const compass=require('express').Router();
const {User,Blogs}=require('../models');
// const daVjncjScan=require('../bills/daVjncjScan');

//existing user
compass.get('/',async(ask,echo)=>{
    try{
        const blogData=await Blogs.findAll({
            include:[{model:User,attributes:['name']}],
        });
        const blogs=blogData.map(blog=>blog.get({plain:true}));

        echo.render('homepage',{
            blogs,
            logged_in:ask.session.logged_in
        });
    }catch (sin){
        echo.status(500).json(sin.message);
    }
});
module.exports=compass;