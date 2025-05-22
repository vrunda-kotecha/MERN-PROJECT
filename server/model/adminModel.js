import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
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
    emailid:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    }
});


export default mongoose.model("Admin", adminSchema);