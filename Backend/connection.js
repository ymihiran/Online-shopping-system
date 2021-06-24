const mongoose=require("mongoose");
//Database connection
const MONGODB_URL=''; //add mongoDB database connection

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

