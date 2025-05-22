import React,{useEffect,useState} from "react"
import { toast } from "react-hot-toast";
import axios from "axios";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Solid icons


const Category =()=>{
    const [catagories,setcategories]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const response =await axios.get("http://localhost:8000/api/getall3")
            setcategories(response.data);
        }
        fetchData();
    },[])

    const deletecategory = async(userId) =>{
        await axios.delete(`http://localhost:8000/api/delete3/${userId}`)
        .then((respones)=>{
            setcategories((prevCategory)=> prevCategory.filter((category)=> category._id !== userId))
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
                        <th>Name</th>
                        <th>Recipient</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        catagories.map((category,index)=>{
                            return(
                                <tr key={category._id}>
                                    <td>{index+1}</td>
                                    <td>{category.name}</td>
                                    <td>{category.recipient}</td>
                                    <td>
                                    <button className="submitbutton" onClick={()=> deletecategory(category._id)}>
                                    delete
                                    </button><br/>
                                    <Link className="button submitbutton" to={`/editcategory/`+category._id} >edit</Link>
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
export default Category;