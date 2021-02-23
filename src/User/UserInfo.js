import React, { useEffect, useState } from "react";
import Users from "./Users";

const url = "https://jsonplaceholder.typicode.com/users";

const UserInfo = () => {
  const [users, setUsers] = useState([]);

  const removeUsers = (id)=>{
      const newUsers=users.filter((user)=>user.id !==id);
      setUsers(newUsers);
  }

  const fetchUsers = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchUsers();
  },[])

  if (users.length===0) {
      return(
          <main>
              <h2>no user lefy</h2>
              <button onClick={() =>fetchUsers()}>refresh</button>
          </main>
      )
      
  }
  return (<div>
        <Users users={users} removeUsers={removeUsers} />
  </div>);
};

export default UserInfo;
