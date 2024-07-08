const express=require('express');
const mongoose=require('mongoose')

const InfoSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true,
    },
    phoneno:{
        type:Number,
        required:true,
        unique:true,
        min:10
    },
    age:{
        type:Number,
        required:true,
        min:0
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    cpassword:{
        type:String,
        required:true,
        unique:true
    }
  });

  const student = mongoose.model('info', InfoSchema);

  module.exports=student;