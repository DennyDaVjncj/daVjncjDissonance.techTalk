const User=require('./user');
const Blogs=require('./blogs');

User.hasMany(Blogs,{
    foreignKey:'userId',
    onDelete:'CASCADE'
});
Blogs.belongsTo(User,{
    foreignKey:'userId'
});
module.exports={User,Blogs};