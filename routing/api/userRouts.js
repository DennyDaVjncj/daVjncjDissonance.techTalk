const compass=require('express').Router();
const {Blogs,User}=require('../../models');
const daVjncjScan=require('../../virtualAssist/daVjncjScan');

compass.post('/api/userRouts',async(ask,echo)=>{
    try{
        // const newUser=await User.create({
        //     ...ask.body,
        // })
        const newUser=await User.create(ask.body);
        ask.session.save(()=>{
            ask.session.user_id=newUser.id;
            ask.session.logged_in=true;
            echo.status(200).json(newUser);
        })
        console.log(newUser);     
    }catch(typo){
        echo.status(400);
    }
})
module.exports=compass;