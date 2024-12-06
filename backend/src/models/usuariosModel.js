import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fullname: {type:String, required:true},
    email:{type:String, unique:true},
    typeDocument:{type: String ,
        enum: ['CC', 'CE'],  
    },
    numberDocument:{type: String,
    },
    password:{type:String, required:true},
    role:{type:String, default:'cliente'}
});


export const userModel = mongoose.model('user', userSchema);