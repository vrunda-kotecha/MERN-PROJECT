import Cart from "../model/cartModel.js";

export const create2= async(req,res)=>{
    try{
         // const cartData=new Cart(req.body);
       const { username,recipient,productid} = req.body;
       console.log(username);
       
           // Check if any required field is missing
           if (!username || !recipient || !productid ) {
             return res.status(400).json({ error: 'All fields are required' });
           }
       
           // Create a new Cart instance
        const cartData= new Cart(req.body);
        if (!cartData){
            return res.status(404).json({msg:"Cart data not found"});
        }
        await cartData.save();
        res.status(200).json({msg:"Cart data registered"});
    }
    catch(error){
        res.status(500).json({error});
    }
}

export const getAll2=async(req,res)=>{
    try{
        const cartData= await Cart.find();
        if(!cartData){
            return res.status(404).json({msg:"cart data not found"});
        }
        res.status(200).json(cartData);
    }
    catch(error){
        res.status(500).json({error:error});
    }
}

export const getOne2 = async(req, res) =>{
    try {

        const id = req.params.id;
        const cartExist = await Cart.findById(id);
        if(!cartExist){
            return res.status(404).json({msg: "Cart not found"});
        }
        res.status(200).json(cartExist);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const update2 = async(req, res) =>{
    try {

        const id = req.params.id;
        const cartExist = await Cart.findById(id);
        if(!cartExist){
            return res.status(401).json({msg:"Cart not found"});
        }

        const updatedData = await Cart.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "Cart updated successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const delete2 = async(req, res) =>{
    try {

        const id = req.params.id;
        const cartExist = await Cart.findById(id);
        if(!cartExist){
            return res.status(404).json({msg: "Cart not exist"});
        }
        await Cart.findByIdAndDelete(id);
        res.status(200).json({msg: "Cart deleted successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}