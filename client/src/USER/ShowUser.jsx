import React,{useEffect,useState} from "react"
import { toast } from "react-hot-toast";
import axios from "axios";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Solid icons


const User =()=>{
    const [users,setusers]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const response =await axios.get("http://localhost:8000/api/getall5")
            setusers(response.data);
        }
        fetchData();
    },[])

    const deleteuser = async(userId) =>{
        await axios.delete(`http://localhost:8000/api/delete5/${userId}`)
        .then((respones)=>{
            setusers((prevUser)=> prevUser.filter((user)=> user._id !== userId))
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
                        <th>Gender</th>
                        <th>Mobile</th>
                        <th>City</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>{
                            return(
                                <tr key={user._id}>
                                    <td>{index+1}</td>
                                    <td>{user.fullname}</td>
                                    <td>{user.username}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.mobile}</td>                                    
                                    <td>{user.city}</td>
                                    <td>
                                    <button className="submitbutton" onClick={()=> deleteuser(user._id)}>
                                    delete
                                    </button><br/>
                                    <Link className="submitbutton" to={`/edituser/`+user._id} >edit</Link>
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
export default User;