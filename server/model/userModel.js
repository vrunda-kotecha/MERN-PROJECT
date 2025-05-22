import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    }
})


export default mongoose.model("User", userSchema);