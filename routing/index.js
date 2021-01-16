//display rout
const compass=require('express').Router();
const dataTravel=require('./api');
const theWayHome=require('./homeRout');

compass.use('/',theWayHome);
compass.use('/api',dataTravel);
    module.exports=compass;