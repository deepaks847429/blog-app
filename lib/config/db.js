import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://deepak:deepak123@cluster0.srpox.mongodb.net/blog-app');
    console.log("DB Connected");
}