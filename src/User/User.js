import React from 'react'

const User = ({id,name,username,email,website,removeUsers}) => {
    const userStyle={
        width:'300px',
        height:'300px',
        border:'1px solid red',
        backgroundColor:'green',
        float:'left',
        padding:'10px',
        margin:'10px',
        borderRadius:'10px'
    }
    return (
        <article style={userStyle}>
            <h2>{name}</h2>
            <footer>
                <h4>{username}</h4>
                <h5>{email}</h5>
              <button onClick={()=>removeUsers(id)}>Delete User</button>
            </footer>
            
        </article>
    )
}

export default User
