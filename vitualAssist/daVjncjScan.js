const daVjncjScan=(ask,echo,next)=>{
    if(!ask.session.logged_in){
        echo.redirect('/login');
    }else{
        next();
    }
};
module.exports=daVjncjScan;