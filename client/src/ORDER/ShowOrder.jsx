import React,{useEffect,useState} from "react"
import { toast } from "react-hot-toast";
import axios from "axios";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Solid icons


const Order =()=>{
    const [orders,setorders]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const response =await axios.get("http://localhost:8000/api/getall4")
            setorders(response.data);
        }
        fetchData();
    },[])

    const deleteorder = async(userId) =>{
        await axios.delete(`http://localhost:8000/api/delete4/${userId}`)
        .then((respones)=>{
            setorders((prevOrder)=> prevOrder.filter((order)=> order._id !== userId))
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
                        <th>ProductId</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Username</th>
                        <th>City</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order,index)=>{
                            return(
                                <tr key={order._id}>
                                    <td>{index+1}</td>
                                    <td>{order.productid}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}</td>
                                    <td>{order.description}</td>
                                    <td>{order.username}</td>
                                    <td>{order.city}</td>
                                    <td>{order.mobile}</td>
                                    <td>
                                    <button className="submitbutton" onClick={()=> deleteorder(order._id)}>
                                    delete
                                    </button><br/>
                                    <Link className="submitbutton" to={`/editorder/`+order._id} >edit</Link>
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
export default Order;