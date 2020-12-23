const connectivity=require('./connectivity/sequelCnnctn');
const {Posts,Comments,Articles,User}=require('./models');
const postData=require('./fertilizer/postData');
const userData=require('./fertilizer/userData');
const cmmntData=require('./fertilizer/cmmentData');
const artcleData=require('./fertilizer/artcleData');

const feedDatabase=async()=>{
    await connectivity.sync({force:true});

    const users=await User.bulkCreate(userData,{
        individualHooks:true,
        returning:true,
    });//we'll have multiple users
    process.exit(0)
};
feedDatabase();