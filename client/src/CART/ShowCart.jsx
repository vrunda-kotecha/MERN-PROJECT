import React,{useEffect,useState} from "react"
import { toast } from "react-hot-toast";
import axios from "axios";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Solid icons


const Cart =()=>{
    const [carts,setcarts]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const response =await axios.get("http://localhost:8000/api/getall2")
            setcarts(response.data);
        }
        fetchData();
    },[])

    const deletecart = async(userId) =>{
        await axios.delete(`http://localhost:8000/api/delete2/${userId}`)
        .then((respones)=>{
            setcarts((prevCart)=> prevCart.filter((cart)=> cart._id !== userId))
          toast.success(respones.data.msg, {position: 'top-right'})
        })
        .catch((error) =>{
          console.log(error);
        })
    }

    return(
        <div className="userTable">
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Recipient</th>
                        <th>ProductId</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carts.map((cart,index)=>{
                            return(
                                <tr key={cart._id}>
                                    <td>{index+1}</td>
                                    <td>{cart.username}</td>
                                    <td>{cart.recipient}</td>
                                    <td>{cart.productid}</td>
                                     <td>
                                    <button className="submitbutton" onClick={()=> deletecart(cart._id)}>
                                    delete
                                    </button><br/>
                                    <Link className="button submitbutton" to={`/editcart/`+cart._id} >edit</Link>
                                     </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Cart;