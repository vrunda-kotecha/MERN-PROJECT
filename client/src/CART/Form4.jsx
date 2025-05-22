import React,{useState}from'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link,useNavigate } from 'react-router-dom';

function Form4() {
  const carts={
    username:"",
    recipient:"",
    productid:""
  }
  const [cart,setcart]=useState(carts);
  const navigate=useNavigate();
  const inputHandler=(e)=>{
    const{name,value}=e.target;
    setcart({...cart,[name]:value})
  }
  const submitForm=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create2",cart)
    .then((response)=>{
      toast.success(response.data.msg,{position: "top-right"})
      navigate("/showcart")
    })
    .catch(error=>console.log(error))
  }

  return (
    <>
            
        <form id="form1" name="form1" onSubmit={submitForm}>
            <div className="form1">
            <center><h2 className="heading1">Cart Registration Form</h2></center>
                    <input type="text" id="username" name ="username" class="field"
                    onChange={inputHandler} autoComplete='off' placeholder='Username'/>
                    <input type="text" id="recipient" name ="recipient" class="field"
                    onChange={inputHandler} autoComplete='off' placeholder='Recipient'/>
                    <input type="text" id="productid" name ="productid" class="field"
                    onChange={inputHandler} autoComplete='off' placeholder='ProductId'/>
                    <input type="submit" id="submit" name ="submit" class="submit"/>    
            </div>
        </form>
    </>
  );
}

export default Form4;
