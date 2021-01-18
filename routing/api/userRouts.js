const compass=require('express').Router();
const {User}=require('../../models');
const daVjncjScan=require('../../virtualAssist/daVjncjScan');

compass.post('/',async(ask,echo)=>{
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
});
compass.post('/login',async(ask,echo)=>{
    try{
        const userData=await User.findOne({where:{eMail:ask.body.eMail}});

        if(!userData){
            echo
                .status(400)
                .json({message:'try logging in again'});
            return;
        }
        const validPW=await userData.checkPassword(ask.body.password);

        if(!validPW){
            echo
                .status(400)
                .json({message:"if you're trying to hack, get better at it"});
            return;
        }
        ask.session.save(()=>{
            ask.session.user_id=userData.id;
            ask.session.logged_in=true;
            echo.json({user:userData,message:"you've cracked the da Vjncj code! well done"})
        });
    }catch(typo){
        echo.status(400).json(typo.message);
    }
});
compass.post('/logout',(ask,echo)=>{
    if(ask.session.logged_in){
        ask.session.destroy(()=>{
            echo.status(204).end();
        });
    }else{
        echo.status(404).end();
    }
});
module.exports=compass;