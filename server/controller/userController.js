import User from "../model/userModel.js";

export const create5=async(req,res)=>{
    try{
         // const userData=new User(req.body);
         const { fullname,username,password, gender, mobile, city} = req.body;
         console.log(username);
       
           // Check if any required field is missing
           if (!fullname || !username || !password || !gender || !mobile || !city) {
            return res.status(400).json({ error: 'All fields are required' });
           }
       
           // Create a new User instance
        const userData=new User(req.body);
        if(!userData){
            return res.status(404).json({msg:"User data not found"});
        }
        await userData.save();
        res.status(200).json({msg:"User created succsessfully"});
    }
    catch(error){
        res.status(500).json({error:error});
    }
}

export const getAll5=async(req,res)=>{
    try{
        const userData= await User.find();
        if(!userData){
            return res.status(404).json({msg:"User data not found"});
        }
        res.status(200).json(userData);
    }
    catch(error){
        res.status(500).json({error:error});
    }
}

export const getOne5 = async(req, res) =>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg: "User not found"});
        }
        res.status(200).json(userExist);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const update5 = async(req, res) =>{
    try {

        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(401).json({msg:"User not found"});
        }

        const updatedData = await User.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "User updated successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const delete5 = async(req, res) =>{
    try {

        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg: "User not exist"});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg: "User deleted successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}