import Order from "../model/orderModel.js";

export const create4= async(req,res)=>{
    try{
         // const orderData=new Order(req.body);
       const { productid,quantity,price,description,username,city,mobile} = req.body;
       console.log(username);
       
           // Check if any required field is missing
           if (!productid || !quantity || !price || !description || !username || !city || !mobile) {
            return res.status(400).json({ error: 'All fields are required' });
           }
       
           // Create a new Order instance
           const orderData= new Order(req.body)
        if(!orderData){
            res.status(404).json({msg:"Order data not found"})
        }
        await orderData.save();
        res.status(200).json({msg:"Order data registered"});
    }
    catch(error){
        res.status(500).json({error:error});
    }
}

export const getAll4=async(req,res)=>{
    try{
        const orderData= await Order.find();
        if(!orderData){
            return res.status(404).json({msg:"Order data not found"});
        }
        res.status(200).json(orderData);
    }
    catch(error){
        res.status(500).json({error:error});
    }
}

export const getOne4 = async(req, res) =>{
    try {

        const id = req.params.id;
        const orderExist = await Order.findById(id);
        if(!orderExist){
            return res.status(404).json({msg: "Order not found"});
        }
        res.status(200).json(orderExist);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const update4 = async(req, res) =>{
    try {

        const id = req.params.id;
        const orderExist = await Order.findById(id);
        if(!orderExist){
            return res.status(401).json({msg:"Order not found"});
        }

        const updatedData = await Order.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "Order updated successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const delete4 = async(req, res) =>{
    try {

        const id = req.params.id;
        const orderExist = await Order.findById(id);
        if(!orderExist){
            return res.status(404).json({msg: "Order not exist"});
        }
        await Order.findByIdAndDelete(id);
        res.status(200).json({msg: "Order deleted successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}