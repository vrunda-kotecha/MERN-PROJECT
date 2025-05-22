import './App2.css';
import React,{useState}from'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link,useNavigate } from 'react-router-dom';

function Form3() {
  const orders={
    productid:"",
    quantity:"",
    price:"",
    description:"",
    username:"",
    city:"",
    mobile:""
  }
  const [order,setorder] = useState(orders);
  const navigate=useNavigate();

  const inputHandler = (e) =>{
    const {name,value} = e.target;
    setorder({...order,[name]:value});
  }
  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create4", order)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/showorder")
    })
    .catch(error => console.log(error))
  }

  return (
    <>
        <form id="form1" name="form1" onSubmit={submitForm}>
            <div className="form1">
            <center><h2 className="heading2">Order Registration Form</h2></center>
                    <input type="text" id="productid" name ="productid" className='input2'
                    onChange={inputHandler} autoComplete='off'placeholder='ProductId'/>
                    <input type="text" id="quantity" name ="quantity" className='input2'
                    onChange={inputHandler} autoComplete='off'placeholder='Quantity'/>
                    <input type="text" id="price" name ="price" className='input2'
                    onChange={inputHandler} autoComplete='off'placeholder='Price'/>
                    <input type="text" id="description" name ="description" className='input2'
                    onChange={inputHandler}  autoComplete='off'placeholder='Description'/>
                    <input type="text" id="username" name ="username" className='input2'
                    onChange={inputHandler} autoComplete='off'placeholder='Username'/>
                    <input type="text" id="city" name ="city" className='input2'
                    onChange={inputHandler} autoComplete='off'placeholder='City'/>
                    <input type="text" id="mobile" name ="mobile" className='input2'
                    onChange={inputHandler} autoComplete='off'placeholder='Mobile'/>
                    <input type="submit" id="submit" name ="submit" class="submit"/>   
            </div>
        </form>
    </>
  );
}
export default Form3;
