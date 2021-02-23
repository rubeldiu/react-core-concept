import React from 'react'

const Menu = ({items}) => {
    const menuStyle={
        border:'px solid gray',
        borderRadius:'5px',
        backgroundColor:'lightgray',
        height:'200px',
        width:'300px',
        float:'left',
        padding:"10px",
        margin:"10px"
      }
    return (
        <div>
            {
                items.map((menuItem)=>{
                    const {id,title,desc,price}=menuItem;
                    return (
                        <article key={id} style={menuStyle}>
                            <header>
                                <h2>{title}</h2>
                                <h3>{price}</h3>
                                <p>{desc}</p>
                            </header>

                        </article>
                    )
                })
            }
            
        </div>
    )
}

export default Menu
