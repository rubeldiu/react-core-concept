import React, { useState } from 'react'

const Question = ({id,name,email,body}) => {
    console.log(name);
    const [showBody,setShowBody]=useState(false)
    return (
        <article>
            <header>
                <h4>{name}</h4>
                <h5>{email}</h5>
                <button onClick={()=>setShowBody(!showBody)}>{ showBody ? '+' : '-'}</button>
            </header>
            {showBody && <p>{body}</p>}
            
        </article>
    )
}

export default Question
