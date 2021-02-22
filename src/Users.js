import React, { useEffect, useState } from 'react'

const Users = () => {
    //https://jsonplaceholder.typicode.com/users

    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))

    },[])

    const userStyle={
        border:'px solid gray',
        borderRadius:'5px',
        backgroundColor:'lightgray',
        height:'200px',
        width:'200px',
        float:'left',
        padding:"10px",
        margin:"10px"
      }
    
    return (
        <div>
           <h3>User Information</h3> 
           {
               users.map((user)=>(
                   <div style={userStyle}>
                   <h1>{user.id}</h1>
                   <h2>{user.name}</h2>
                   <p>{user.email}</p>
                   </div>
                ))
           }
        </div>
    )
}

export default Users
