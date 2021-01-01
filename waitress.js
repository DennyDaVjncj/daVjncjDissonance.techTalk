const pathways=require('path');
const xprss=require('express');
const session=require('express-session');
const xprssHB=require('express-handlebars');
const enRout=require('./routing');
const maps=require('./bills/maids');
const sequelize=require('./connectivity/sequelCnnctn');
const sequelizeTracker=require('connect-session-sequelize')(session.Store);
const xprssApp=xprss();
const CHANNEL=process.env.CHANNEL||4223;
const monkeyBars=xprssHB.create({maps});
const crayons=require('chalk');

const sess={
    secret:'cognitive dissonance',
    cookie:{},
    resave:false,
    saveUninitialized:true,
    store:new sequelizeTracker({db:sequelize})
};

xprssApp.use(session(sess));
xprssApp.engine('handlebars',monkeyBars.engine);
xprssApp.set('view engine','handlebars');
xprssApp.use(xprss.json());
xprssApp.use(xprss.urlencoded({extended:true}));
xprssApp.use(xprss.static(pathways.join(__dirname,'public')));
xprssApp.use(enRout);

//sequelize connection, rename
sequelize.sync({force:false}).then(()=>{
    xprssApp.listen(CHANNEL,()=>console.log('live connection to web on port:'+CHANNEL));
})