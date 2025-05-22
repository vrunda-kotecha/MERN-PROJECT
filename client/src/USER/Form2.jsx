import React,{useState}from'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {Link, useNavigate}from 'react-router-dom';

function Form2() {
    const users={
        fullname:"",
        username:"",
        password:"",
        gender:"",
        mobile:"",
        city:""
    }
    const[user,setuser]=useState(users)
    const navigate=useNavigate();
    const inputHandler=(e)=>{
        const {name,value}=e.target;
        setuser({...user,[name]:value})
    }
    const submitForm = async(e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create5", user)
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
            <center><h2 className="heading2">User Registration Form</h2></center>
                    <input type="text" id="fullname" name ="fullname" className='input3'
                    onChange={inputHandler} autoComplete='off'placeholder='Fullname'/>
                    <input type="text" id="username" name ="username" className='input3'
                    onChange={inputHandler} autoComplete='off'placeholder='Username'/>
                    <input type="password" id="password" name ="password" className='input3'
                    onChange={inputHandler} autoComplete='off'placeholder='Password'/>
                    <input type="text" id="gender" name ="gender" className='input3'
                    onChange={inputHandler} autoComplete='off'placeholder='Gender'/>
                    <input type="text" id="mobile" name ="mobile" className='input3'
                    onChange={inputHandler} autoComplete='off'placeholder='Mobile'/>
                    <input type="text" id="city" name ="city" className='input3'
                    onChange={inputHandler} autoComplete='off'placeholder='City'/>
                    <input type="submit" id="submit" name ="submit" class="submit"/>
            </div>
        </form>
    </>
  );
}

export default Form2;
