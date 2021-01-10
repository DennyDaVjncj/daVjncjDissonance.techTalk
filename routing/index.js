//BUILD OUT ALL ROUTES IN ORDER TO RENDER
const compass = require('express').Router();
const theWayHome = require('./homeRout');
//const userRouts = require('./api/userRouts');
//const blogRouts = require('./api/blogRouts');
const apiRoutes = require("./api");

compass.use(theWayHome);
compass.use("/api", apiRoutes);
//compass.use(userRouts)
//compass.use(blogRouts)
module.exports = compass;
