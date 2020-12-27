const myDolphin=require('../connectivity/sequelCnnctn');
const { User }=require('../../models/userModel');
// const postData=require('./fertilizer/postData');
const userData=require('./userData.json');
// const cmmntData=require('./fertilizer/cmmentData');
// const artcleData=require('./fertilizer/artcleData');

const feedDatabase=async()=>{
    await myDolphin.sync({force:true});

    const users=await User.bulkCreate(userData,{
        individualHooks:true,
        returning:true,
    });
    for(const user of userData){
        await User.create({
            ...users,
            userId:users[Math.floor(Math.random()*users.length)].id
        });
    }
    // const users=await User.bulkCreate(userData,{
    //     individualHooks:true,
    //     returning:true,
    // });//this will serve our article model
    process.exit(0)
};
feedDatabase();