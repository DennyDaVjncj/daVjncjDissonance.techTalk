const compass=require('express').Router();
const {Blogs,User}=require('../../models/blogs');
const daVjncjScan=require('../../virtualAssist/daVjncjScan');
const uiUX=require('../../views/');
const { BelongsTo } = require('sequelize/types');

compass.post('/api/blogs/:id',async(ask,echo)=>{
    try{
        const newBlog=await Blogs.create({
            ...ask.body,
            userId:ask.session.userId,
        });
        echo.status(200).json(newBlog);
        console.log(newBlog)
    }catch(typo){
        echo.status(400).json(typo.message);
    }
})
module.exports=compass;