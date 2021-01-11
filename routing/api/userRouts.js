const compass=require('express').Router();
const {Blogs,User}=require('../../models');
const daVjncjScan=require('../../virtualAssist/daVjncjScan');

compass.post('/',async(ask,echo)=>{
    try{
        const newUser=await User.create({
            ...ask.body,
        })
        console.log(newUser);
        echo.status(200).json(newUser);
    }catch(typo){
        echo.status(500)
    }
})
module.exports=compass;