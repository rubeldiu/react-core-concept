import React from 'react'

const first = () => {
    var person={
        name:"Dr. Mahfuz",
        job:"Singer"
     };
     var person2={
        name:"Eva Rahman",
        job:"Kokil Konthi"
     };
     var style={
       color:'red',
       backgroundColor:'yellow'
     }
    return (
        <div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h2>My Heading</h2>
          <h3>{(2*5)*5}</h3>
          <h4 style={style}>{person.name+ " "+person.job}</h4>
          <h4 style={{backgroundColor:'cyan', color:'yellow'}}>{person2.name+ " "+person2.job}</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        
      </div>
    )
}

export default first
