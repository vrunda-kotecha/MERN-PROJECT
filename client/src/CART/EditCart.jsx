import React,{useState,useEffect}from'react'
import {Link,useNavigate,useParams}from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function EditCart() {
  const carts={
    username:"",
    recipient:"", 
    productid:""
  }
  const {id} = useParams();
  const [cart, setcart] = useState(carts);
  const navigate = useNavigate();

  const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    setcart({...cart, [name]:value});
    console.log(cart);
 }

 useEffect(()=>{
    axios.get(`http://localhost:8000/api/getone2/${id}`)
    .then((response)=>{
        setcart(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])

 const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update2/${id}`,cart)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/showcart")
    })
    .catch(error => console.log(error))
 }


  return (
    <>
        <form id="form1" name="form1" onSubmit={submitForm}>
            
            <div className="form1">
            <center><h2 className="heading1">Update Cart</h2></center>
                    <p className="field1">{cart.username}</p>
                    <input type="text" id="recipient" name ="recipient" placeholder='recipient'className="field"
                    onChange={inputChangeHandler} autoComplete='off'value={cart.recipient}/>
                    <p className="field1">{cart.productid}</p>
                    <input type="submit" id="submit" name ="submit" className="submit"/>
            </div>
        </form>
    </>
  );
}

export default EditCart;
