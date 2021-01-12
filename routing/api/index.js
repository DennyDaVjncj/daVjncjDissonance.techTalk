const compass=require('express').Router();
const userRouts=require('./userRouts');
const blogRouts=require('./blogRouts');

compass.use('/users',userRouts);
compass.use('/blogs',blogRouts);
    module.exports=compass;