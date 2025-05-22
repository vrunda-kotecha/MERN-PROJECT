import React,{useState}from'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link,useNavigate } from 'react-router-dom';

function Form5() {
  const categories={
    name:"",
    recipient:""
  }
  const [category,setcategory]=useState(categories);
  const navigate = useNavigate();
  
  const inputHandler = (e)=>{
    const {name,value}=e.target;
    setcategory({...category, [name]:value});
  }
  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create3", category)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/showcategory")
    })
    .catch(error => console.log(error))
  }

  return (
    <>
        <form id="form1" name="form1" onSubmit={submitForm}>
            <div className="form1">
            <center><h2 className="heading1">Category Registration Form</h2></center>
                    <input type="text" id="name" name ="name" class="field"
                    onChange={inputHandler} autoComplete='off' placeholder='Category Name'/>
                    <input type="text" id="recipient" name ="recipient" class="field"
                    onChange={inputHandler} autoComplete='off' placeholder='Recipient'/>
                    <input type="submit" id="submit" name ="submit" class="submit"/>    
            </div>
        </form>
    </>
  );
}

export default Form5;
