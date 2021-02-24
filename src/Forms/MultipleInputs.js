import React, { useState } from 'react'

const MultipleInputs = () => {
    const [person,setPerson]=useState({firstName:'',email:'',age:''});
    const [people,setPeople]=useState([]);
    //const refContainer=useRef(null);
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setPerson({...person,[name]:value});
    };

   const handleSubmit  =(e)=>{
       e.preventDefault();
       if (person.firstName && person.email && person.age) {
           const newPerson ={...person, id:new Date().getDate().toString()}
           setPeople([...people,newPerson]);
           setPerson({firstName:'',email:'',age:''})
           
       }

   }  
   
    return (
        <>
        <article className='form'>
            <form>
                <div className='form-control'>
                    <label htmlFor="firstName">Name : </label>
                    <input type="text"
                    id='firstName'
                    name='firstName'
                    value={person.firstName}
                    onChange={handleChange}
                    
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="firstName">Email : </label>
                    <input type="text"
                    id='email'
                    name='email'
                    value={person.email}
                    onChange={handleChange}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="firstName">Age : </label>
                    <input type="text"
                    id='age'
                    name='age'
                    value={person.age}
                    onChange={handleChange}
                    />
                </div>
                <button className="btn" type="submit" onClick={handleSubmit}>add person</button>
            </form>

        </article>

        <article>
            {people.map((person)=>{
                const {id,firstName,email,age}=person;
                return(
                    <div key={id} className='item'>
                        <h4>{firstName}</h4>
                        <p>{email}</p>
                        <p>{age}</p>

                    </div>
                )
            })}
        </article>

            
        </>
    )
}

export default MultipleInputs
