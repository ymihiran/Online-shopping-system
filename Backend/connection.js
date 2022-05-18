const mongoose=require("mongoose");
//Database connection
const MONGODB_URL='mongodb+srv://Yasa:1234@aa1.m78xp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; //add mongoDB database connection

const connectDB =async () =>{
    await mongoose.connect(MONGODB_URL,{
        useCreateIndex:true,
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useFindAndModify:false
    });
    console.log('Mongo Connection Succesfully Run !!');
}
module.exports=connectDB;

