const passport = require('passport'); //auth middleware
const LocalStrategy = require('passport-local').Strategy; //stratergy
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('./models/User');

//extracting jwt token from the request
const cookieExtractor = req=>{
    let token = null;
    if(req && req.cookies){
        token = req.cookies["access_token"];
    }
    return token;
}



        //Authorization 
 passport.use(new JwtStrategy({
     //options
     jwtFromRequest : cookieExtractor, //this is th ecustom function tht we use to extract jwt token from request
     secretOrKey  : "hasa"            //key you used to sign the token    

 },(payload,done)=>{
     //finding user
     User.findById({_id : payload.sub},(err,user)=>{
         if(err)
            return done(err,false);
                if(user)
                    return done(null,user);
         else
            return done(null,false);
     })
 }))

//once we authenticated we send cookie to cliet it is gonna be jwt token

            //Authentication local stratergy using usname and pw
passport.use(new LocalStrategy((username,password,done)=>{
    //check if user exsist
    User.findOne({username},(err,user)=>{
        //something went wrong with DB
        if(err)
            return done(err);
            //if no users exist
                if(!user)
                    return done(null,false);

                    //if now you find the user now compare the password and chk if pw is correct
                    user.comparePassword(password,done);
    })



}))