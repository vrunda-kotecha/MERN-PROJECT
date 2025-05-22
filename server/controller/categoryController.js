import Category from "../model/categoryModel.js";

export const create3=async (req,res)=>{
    try{
        // const categoryData=new Category(req.body);
       const { name,recipient} = req.body;
       console.log(name);
       
           // Check if any required field is missing
           if (!name || !recipient  ) {
             return res.status(400).json({ error: 'All fields are required' });
           }
       
           // Create a new Category instance
        const categoryData= new Category(req.body)
        if(!categoryData)
        {
            return res.status(404).json({msg:"Category data not found"});
        }
        await categoryData.save();
         res.status(200).json({msg:"Category data registered"});
    }
    catch(error){
         res.status(500).json({error:error});
    }
}


export const getAll3=async(req,res)=>{
    try{
        const cartData= await Category.find();
        if(!cartData){
            return res.status(404).json({msg:"cart data not found"});
        }
        res.status(200).json(cartData);
    }
    catch(error){
        res.status(500).json({error:error});
    }
}

export const getOne3 = async(req, res) =>{
    try {

        const id = req.params.id;
        const categoryExist = await Category.findById(id);
        if(!categoryExist){
            return res.status(404).json({msg: "Category not found"});
        }
        res.status(200).json(categoryExist);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const update3 = async(req, res) =>{
    try {

        const id = req.params.id;
        const categoryExist = await Category.findById(id);
        if(!categoryExist){
            return res.status(401).json({msg:"Category not found"});
        }

        const updatedData = await Category.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "Category updated successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const delete3 = async(req, res) =>{
    try {

        const id = req.params.id;
        const categoryExist = await Category.findById(id);
        if(!categoryExist){
            return res.status(404).json({msg: "Category not exist"});
        }
        await Category.findByIdAndDelete(id);
        res.status(200).json({msg: "Category deleted successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}