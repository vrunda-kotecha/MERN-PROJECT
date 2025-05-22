import React,{useState}from'react'
import {Link,useNavigate}from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Form() {
  const admins={
    fullname:"",
    username:"",
    password:"",
    emailid:"",
    mobile:""
  }
  const [admin, setadmin] = useState(admins);
  const navigate = useNavigate();

  const inputHandler = (e) =>{
      const {name, value} = e.target;
      setadmin({...admin, [name]:value});
  }

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create1", admin)
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
            <center><h2 className="heading">Admin Registration Form</h2></center>
                <br/>
                    <input type="text" id="fullname" name ="fullname" className="field" 
                    onChange={inputHandler} autoComplete='off' placeholder='Name'/>
                    <input type="text" id="username" name ="username" className="field"
                    onChange={inputHandler} autoComplete='off' placeholder='Username'/>
                    <input type="password" id="password" name ="password" className="field"
                    onChange={inputHandler} autoComplete='off' placeholder='Password'/>
                    <input type="text" id="emailid" name ="emailid" className="field"
                    onChange={inputHandler} autoComplete='off' placeholder='EmailId'/>
                    <input type="text" id="mobile" name ="mobile" className="field"
                    onChange={inputHandler} autoComplete='off' placeholder='Mobile'/>
                    <input type="submit" id="submit" name ="submit" className="submit"/>
            </div>
        </form>
      
    </>
  );
}

export default Form;
