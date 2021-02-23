import React from 'react'
import User from './User'

const Users = ({users,removeUsers}) => {
    return (
        <div>
           { users.map((user)=>{
                return <User key={user.id} {...user} removeUsers={removeUsers} />
            })}
        </div>
    )
}

export default Users
