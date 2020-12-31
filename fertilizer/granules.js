const myDolphin=require('../connectivity/sequelCnnctn');
const 
{User,Blogs}=require('../models/user');
const blogData=require('./fertilizer/postData');
const userData=require('./userData.json');
// const cmmntData=require('./fertilizer/cmmentData');
// const artcleData=require('./fertilizer/artcleData');

const feedDatabase=async()=>{
    await myDolphin.sync({force:true});

    const users=await User.bulkCreate(userData,{
        individualHooks:true,
        returning:true,
    });
    for(const users of userData){
        await User.create({
            ...users,
            userId:users[Math.floor(Math.random()*users.length)].id
        });
    }
    const blogs=await Blogs.bulkCreate(blogData,{
        individualHooks:true,
        returning:true,
    });//this will serve our article model
    process.exit(0)
};
feedDatabase();