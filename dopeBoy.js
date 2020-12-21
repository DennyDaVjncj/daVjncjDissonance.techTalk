const pathways=require('path');
const xprss=require('express');
const session=require('express-session');
const xprssHB=require('express-handlebars');
const enRout=require('./controllers');
const maids=require('./maids/helpers');
const dataConnect=require('./models/sequelCnnctn');
const SequelizeStore=require('connect-session-sequelize')(session.Store);
const xprssApp=xprss();
const CHANNEL=process.env.CHANNEL||4224;
const monkeyBars=xprssHB.create({maids});

const sess={
    secret:'cognitive dissonance',
    cookie:{},
    resave:false,
    saveUninitialized:true,
    store:new SequelizeStore({db:dataConnect})
};

xprssApp.use(session(sess));
xprssApp.engine('handlebars',monkeyBars.engine);
xprssApp.set('view engine','handlebars');
xprssApp.use(xprss.json());
xprssApp.use(xprss.urlencoded({extended:true}));
xprssApp.use(xprss.static(pathways.join(__dirname,'public')));
xprssApp.use(enRout);

//sequelize connection, rename
dataConnect.sync({force:false}).then(()=>{
    xprssApp.listen(CHANNEL,()=>console.log('live connection to database'));
})