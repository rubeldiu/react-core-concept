import React from 'react'

const Component = (props) => {
    const personStyle={
       border:'2px solid green',
       margin:'5px' 
    }
    const {name,age}=props;
    return (
        <div style={personStyle}>
          <h2>Name : {name}</h2> 
          <h3>Age :{age}</h3> 
        </div>
    )
}

export default Component
