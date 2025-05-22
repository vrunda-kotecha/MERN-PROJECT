import Admin from "../model/adminModel.js";

export const create1=async(req,res)=>{
    try{
       const { fullname,username,password, emailid, mobile } = req.body;
    console.log(username);

    if (!fullname || !username || !password || !emailid || !mobile) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const adminData = new Admin({ fullname, username, password, emailid, mobile });

        if (!adminData){
            return res.status(404).status({msg:"Admin data not found"});
        }
        await adminData.save();
        res.status(200).json({msg:"Admin created succsessfully"});
    }
    catch(error){
        res.status(500).json({error: error});
    }
}

export const getAll1 = async(req,res)=>{
    try{
        const adminData= await Admin.find();
        if(!adminData){
            return res.status(404).json({msg:"Admin data not found"});
        }
        res.status(200).json(adminData);
    }
    catch(error){
        res.status(500).json({error:error});
    }
}

export const getOne1 = async(req, res) =>{
    try {

        const id = req.params.id;
        const adminExist = await Admin.findById(id);
        if(!adminExist){
            return res.status(404).json({msg: "Admin not found"});
        }
        res.status(200).json(adminExist);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const update1 = async(req, res) =>{
    try {

        const id = req.params.id;
        const adminExist = await Admin.findById(id);
        if(!adminExist){
            return res.status(401).json({msg:"Admin not found"});
        }

        const updatedData = await Admin.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "Admin updated successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const delete1 = async(req, res) =>{
    try {

            const id = req.params.id;
            const adminExist = await Admin.findById(id);
            if(!adminExist){
                return res.status(404).json({msg: "Admin not exist"});
            }
            await Admin.findByIdAndDelete(id);
            res.status(200).json({msg: "Admin deleted successfully"});
        }
     catch (error) {
        res.status(500).json({error: error});
    }
}



