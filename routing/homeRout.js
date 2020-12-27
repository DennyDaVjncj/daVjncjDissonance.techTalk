const compass=require('express').Router();
const {User,Blogs}=require('../models');
const secureScan=require('../bills/secureScan');

//existing user
compass.get('/login',async(ask,echo)=>{
    if(ask.session.logged_in){
        echo.redirect('/profile');
        return;
    }
    echo.render('login');
})
module.exports=compass;