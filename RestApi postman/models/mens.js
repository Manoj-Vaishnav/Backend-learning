const mongoose=require('mongoose');

const mensSchema= new mongoose.Schema({
    event:{
        type:String,
        default:"100m"
    },
    ranking:{
        type:Number,
        unique:true,
        recquired:true
    },
    name:{
        type:String,
        recquired:true,
        trim:true
    },
    dob:{
        type:Date,
        recquired:true,
        trim:true
    },
    country:{
        type:String,
        recquired:true,
        trim:true
    },
    score:{
        type:Number,
        recquired:true,
        trim:true
    }
});

const Mensdb=new mongoose.model('mensdb',mensSchema);
module.exports=Mensdb;

