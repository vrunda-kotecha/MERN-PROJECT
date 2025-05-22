import React,{useState,useEffect}from'react'
import {Link,useNavigate,useParams}from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function EditOrder() {
  const orders={
    productid:"", 
    quantity:"",
    price:"",
    description:"",
    username:"",
    city:"",
    mobile:""
  }
  const {id} = useParams();
  const [order, setorder] = useState(orders);
  const navigate = useNavigate();

  const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    setorder({...order, [name]:value});
    console.log(order);
 }

 useEffect(()=>{
    axios.get(`http://localhost:8000/api/getone4/${id}`)
    .then((response)=>{
        setorder(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])

 const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update4/${id}`,order)
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
            <center><h2 className="heading2">Update Order</h2></center>
                    <p className="field1">{order.productid}</p>
                    <input type="text" id="quantity" name ="quantity" placeholder='Quantity' className="field" 
                    onChange={inputChangeHandler} autoComplete='off' value={order.quantity}/>
                    <p className="field1">{order.price}</p>
                    <p className="field1">{order.username}</p>
                    <input type="text" id="city" name ="city" placeholder='city' className="field"
                    onChange={inputChangeHandler} autoComplete='off'value={order.city}/>
                    <input type="submit" id="submit" name ="submit" className="submit"/>
            </div>
        </form>
    </>
  );
}

export default EditOrder;
