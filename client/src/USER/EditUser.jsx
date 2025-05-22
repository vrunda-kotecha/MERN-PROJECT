import React,{useState,useEffect}from'react'
import {Link,useNavigate,useParams}from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function EditUser() {
  const users={
    fullname:"", 
    username:"",
    password:"",
    mobile:"",
    city:""
    
  }
  const {id} = useParams();
  const [user, setuser] = useState(users);
  const navigate = useNavigate();

  const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    setuser({...user, [name]:value});
    console.log(user);
 }

 useEffect(()=>{
    axios.get(`http://localhost:8000/api/getone5/${id}`)
    .then((response)=>{
        setuser(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])

 const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update5/${id}`,user)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/showuser")
    })
    .catch(error => console.log(error))
 }


  return (
    <>
        <form id="form1" name="form1" onSubmit={submitForm}>
            
            <div className="form1">
            <center><h2 className="heading1">Update User</h2></center>
            <input type="text" id="fullname" name ="fullname" placeholder='Fullname' className="field" 
                    onChange={inputChangeHandler} autoComplete='off' value={user.fullname}/>
                    <p className="field1">{user.username}</p>
                    <input type="text" id="mobile" name ="mobile" placeholder='mobile' className="field"
                    onChange={inputChangeHandler} autoComplete='off'value={user.mobile}/>
                    <input type="text" id="city" name ="city" placeholder='emailid'className="field"
                    onChange={inputChangeHandler} autoComplete='off'value={user.city}/>
                    <input type="submit" id="submit" name ="submit" className="submit"/>
            </div>
        </form>
    </>
  );
}

export default EditUser;
