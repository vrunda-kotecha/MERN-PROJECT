import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    productid:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    }
})


export default mongoose.model("Order", orderSchema);