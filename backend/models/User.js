const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({

    username:{
        type : String,
        required : true,
        min:6,
        max:15
    },
    password :{
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['user','admin'],
        required : true
    },
    todos : [{type :mongoose.Schema.Types.ObjectId, ref : 'Todo'}]
});

UserSchema.pre('save',function(next){
    //check if its modifie (coms with plain text)
    if(!this.isModified('password'))
    return next();
    //encryptinour password
    bcrypt.hash(this.password,10,(err,passwordhash)=>{
        if(err)
        return next(err);
        this.password = passwordhash;
        next();
    });
});

//compare password to compare plaintext version from client and our HASH encryped version that saved in our database
                                                        //this "cb" is the done function
UserSchema.methods.comparePassword = function(password,cb){
    bcrypt.compare(password,this.password,(err,isMatch)=>{
        if(err)
        return cb(err);
        else{
            if(!isMatch)
            return cb(null,isMatch);
            return cb(null,this);
        }

    })
}
  
module.exports =mongoose.model('User',UserSchema);