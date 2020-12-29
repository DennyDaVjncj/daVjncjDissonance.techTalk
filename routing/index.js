//BUILD OUT ALL ROUTES IN ORDER TO RENDER
const compass=require('express').Router();
const theWayHome=require('./homeRout');
compass.use('/',theWayHome);
    module.exports=compass;