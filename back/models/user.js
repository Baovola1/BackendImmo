import mongoose from "mongoose";
 
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
       
    },
    avatar:{
        type: String,
        default:"https://static-prod.adweek.com/wp-content/uploads/2020/05/FacebookAvatarsUS-1-652x367.jpg"
    },
},{timestamps: true});

const User = mongoose.model('users', userSchema);

export default User;