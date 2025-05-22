import React,{useState,useEffect}from'react'
import {Link,useNavigate,useParams}from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function EditAdmin() {
  const admins={
    fullname:"", 
    username:"",
    password:"",
    emailid:"",
    mobile:""
  }
  const {id} = useParams();
  const [admin, setadmin] = useState(admins);
  const navigate = useNavigate();

  const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    setadmin({...admin, [name]:value});
    console.log(admin);
 }

 useEffect(()=>{
    axios.get(`http://localhost:8000/api/getone1/${id}`)
    .then((response)=>{
        setadmin(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])

 const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update1/${id}`,admin)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/showadmin")
    })
    .catch(error => console.log(error))
 }


  return (
    <>
        <form id="form1" name="form1" onSubmit={submitForm}>
            
            <div className="form1">
            <center><h2 className="heading1">Update Admin</h2></center>
                    <input type="text" id="fullname" name ="fullname" placeholder='Fullname' className="field" 
                    onChange={inputChangeHandler} autoComplete='off' value={admin.fullname}/>
                    <p className="field1">{admin.username}</p>
                    <input type="text" id="emailid" name ="emailid" placeholder='emailid'className="field"
                    onChange={inputChangeHandler} autoComplete='off'value={admin.emailid}/>
                    <input type="text" id="mobile" name ="mobile" placeholder='mobile' className="field"
                    onChange={inputChangeHandler} autoComplete='off'value={admin.mobile}/>
                    <input type="submit" id="submit" name ="submit" className="submit"/>
            </div>
        </form>
    </>
  );
}

export default EditAdmin;
