import React, { useEffect, useState } from 'react'
import axios from '../layout/AxiosConfig';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../layout/css/styled.css"

export default function EditUser() {
    let navigate=useNavigate();
    const {id}=useParams();

    const [users,setUser]=useState({
        fullname:"",
        email:"",
        phone:"",
        password:""
    })
    const{fullname,email,phone,password}=users;

    useEffect(()=>{
        loadUser();
    },[])

    const onInputChange=(e)=>{
        setUser({... users,[e.target.name]:e.target.value})
    }
    const onSubmit=async (e)=> {
        e.preventDefault();
        try {
            await axios.put(`/users/update/${id}`,users);
            alert("user Successfully Updated")
            navigate('/')
            
        } catch (error) {
            console.log(error)
        }
        
    }

    const loadUser=async ()=>{
        const result= await axios.get(`/users/user/${id}`);
        setUser(result.data.user);
        //console.log(result.data.user.email)
    }


  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
            <div className='register p-2 mb-4' > <h2 className='text-center mb-4'>Update</h2></div>  
               {users &&(
                <form onSubmit={(e)=>onSubmit(e)}>
                
                <div className="mb-4">
                
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Enter your Name'
                    name='fullname'
                    value={users.fullname}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className="mb-4">
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder='Enter your Email'
                    name='email'
                    value={users.email}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className="mb-4">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Enter your Phone'
                    name='phone'
                    value={phone}
                    onChange={(e)=>onInputChange(e)}
                    />
                    
                </div>

                {/* <div className="mb-4">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Enter your Password'
                    name='password'
                    value={users.password}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div> */}

                <div className="text-center mt-2">
                    <button type='submit' className="btn btn-outline-primary "> Update</button>
                    <Link className="btn btn-outline-danger mx-2" to="/"> Cancel</Link>
                </div>
              
             
           </form>  )}
                 
               
               

            </div>
        </div>
    </div>
  )
}
