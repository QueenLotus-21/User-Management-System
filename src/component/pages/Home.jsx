import { Link } from 'react-router-dom';
import axios from '../layout/AxiosConfig'
import React, { useEffect, useState } from 'react'


 function Home() {

    const [users,setUser]=useState([])

     
        async function getAllUser() {
            try {
            const result=await axios.get("/users/allUser");
            //console.log(result.data);
            setUser(result.data)
            
            } catch (error) {
                console.log(error)
            }
     }


    // const loadUsers=async ()=>{
    //     const result=await axios.get("/users/allUser");
    //     console.log(result);

    // }

    useEffect(()=>{
        //console.log("code witk tig");
        getAllUser()
    },[])

  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadow" style={{height:'100%'}}>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Email</th>
                    {/* <th scope="col">Phone</th> */}
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider" style={{ height: '200px', overflowY: 'auto' }}>
                    {users.map((user,index)=>(
                        
                        <tr>
                            <th scope="row" key={index}>{index +1}</th>
                            <td>{user.fullname}</td>
                            <td>{user.email}</td>
                            {/* <td>{user.phone}</td> */}
                            <td>
                                <Link className='btn btn-primary mx-2'
                                to={`/viewUser/${user.id}`}>View</Link>
                                <Link className='btn btn-outline-primary mx-2'
                                to={`/editUser/${user.id}`}
                                >Edit</Link>
                                <button className='btn btn-danger mx-2'>Delete</button>
                            </td>
                      </tr>
                    ))
                    }
                    
                    
                </tbody>
            </table>
            <Link className='btn btn-outline-primary' to="/addUser">AddUser</Link>

        </div>
    </div>
  )
}

export default Home