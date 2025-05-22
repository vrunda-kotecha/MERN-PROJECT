import React,{useEffect,useState} from "react"
import { toast } from "react-hot-toast";
import axios from "axios";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Solid icons


const Admin =()=>{
    const [admins,setadmins]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const response =await axios.get("http://localhost:8000/api/getall1")
            setadmins(response.data);
        }
        fetchData();
    },[])

    const deleteadmin = async(userId) =>{
        await axios.delete(`http://localhost:8000/api/delete1/${userId}`)
        .then((respones)=>{
            setadmins((prevAdmin)=> prevAdmin.filter((admin)=> admin._id !== userId))
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
                        <th>Fullname</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        admins.map((admin,index)=>{
                            return(
                                <tr key={admin._id}>
                                    <td>{index+1}</td>
                                    <td>{admin.fullname}</td>
                                    <td>{admin.username}</td>
                                    <td>{admin.emailid}</td>
                                    <td>{admin.mobile}</td>
                                    <td>
                                    <button className="submitbutton" onClick={()=> deleteadmin(admin._id)}>
                                    delete
                                    </button><br/>
                                    <Link className="submitbutton" to={`/editadmin/`+admin._id} >edit</Link>
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
export default Admin;