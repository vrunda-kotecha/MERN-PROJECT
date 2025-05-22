import React,{useState,useEffect}from'react'
import {Link,useNavigate,useParams}from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function EditCategories() {
  const categories={
    name:"", 
    recipient:""
  }
  const {id} = useParams();
  const [category, setcategory] = useState(categories);
  const navigate = useNavigate();

  const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    setcategory({...category, [name]:value});
    console.log(category);
 }

 useEffect(()=>{
    axios.get(`http://localhost:8000/api/getone3/${id}`)
    .then((response)=>{
        setcategory(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])

 const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update3/${id}`,category)
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
            <center><h2 className="heading1">Update Category</h2></center>
                    <input type="text" id="name" name ="name" placeholder='Name' className="field" 
                    onChange={inputChangeHandler} autoComplete='off' value={category.name}/>
                    <input type="text" id="recipient" name ="recipient" placeholder='recipient'className="field"
                    onChange={inputChangeHandler} autoComplete='off'value={category.recipient}/>
                    <input type="submit" id="submit" name ="submit" className="submit"/>
            </div>
        </form>
    </>
  );
}

export default EditCategories;
