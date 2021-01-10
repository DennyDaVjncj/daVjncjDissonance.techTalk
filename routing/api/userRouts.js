const compass = require('express').Router();
const { Blogs, User } = require('../../models');
const daVjncjScan = require('../../virtualAssist/daVjncjScan');
//const uiUx = require('../../views');

//this route goes to /api/users
compass.post('/', async (ask, echo) => {
    try {
        const newUser = await User.create({
            // name: ask.body.name,
            // email: ask.body.email,
            // password: ask.body.password
            //below is the faster way of doing this
            ...ask.body,
        })

        console.log(newUser);
        echo.status(200).json(newUser);
    }catch(typo){
        echo.status(400).json(typo.message)
    }
})

module.exports=compass;