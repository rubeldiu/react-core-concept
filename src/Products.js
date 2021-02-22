import React from 'react'

const Products = (props) => {
    const productStyle={
      border:'px solid gray',
      borderRadius:'5px',
      backgroundColor:'lightgray',
      height:'200px',
      width:'200px',
      float:'left',
      padding:"10px",
      margin:"10px"
    }
    const {name,price}=props
    return (
        <div style={productStyle}>
            <h2>Name:{name}</h2>
            <h1>Price: {price}</h1>
            <button>Buy now</button>
        </div>
    )
}

export default Products
