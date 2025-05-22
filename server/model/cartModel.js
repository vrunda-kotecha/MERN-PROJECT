import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
   
    username:{
        type: String,
        required: true
    },
    recipient:{
        type: String,
        required: true
    },
    productid:{
        type: String,
        required: true
    }
})


export default mongoose.model("Cart", cartSchema);