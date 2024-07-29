import React, { useEffect, useRef, useState } from 'react'
import axios from '../layout/AxiosConfig';
import { Link, useNavigate, useParams } from 'react-router-dom';
import  "../layout/css/styled.css"

    
    export default function ViewUser() {
        const {id}=useParams();
       const [user,setUser]=useState(null)
       
       
    
        useEffect(()=>{
            getUser()
        },[])

     const getUser= async()=> {
       
          const data=  await axios.get(`/users/user/${id}`);
           setUser(data.data.user)
            console.log(data.data.user);
            
        } 
    
        if (!user) {
            return <div>Loading...</div>;
          }
    
      return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded  mt-5 shadow">          
                   <div className='login p-2 mb-4' > <h2 className='text-center mb-4'>View User</h2></div>    
                   

                        <div className="mb-4 p-2">
                          <strong>Name: &nbsp;&nbsp;{user.fullname}</strong>     
                        </div>
                        <div className="mb-4 p-2">
                          <strong>Email:&nbsp;&nbsp;{user.email}</strong>     
                        </div>
                        <div className="mb-4 p-2">
                          <strong>Phone:&nbsp; &nbsp;{user.phone}</strong>     
                        </div>
            
    
                        <div className="text-center mt-2 pb-4">     
                            <Link className="btn btn-outline-danger mx-2" to="/"> Cancel</Link>
                        </div>
    
                </div>
            </div>
        </div>
      )
    }
    
