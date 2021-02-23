import React, { useEffect, useState } from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'
import './Tabs.css';


const url ="https://course-api.com/react-tabs-project";
const Tabs = () => {
    const [loading,setLoading]=useState(true);
    const [jobs,setJobs]=useState([]);
    const [value,setValue]=useState(0);

    const fetchJobs = async() =>{
        try {
            const response = await fetch(url);
            const jobs = await response.json();
            console.log(jobs);
            setJobs(jobs);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () =>{
        fetchJobs();
    },[])

    if(loading){
        return(
            <section className="section-loading">
                <h1>Loading...</h1>
            </section>
        )
    }
    const {company,dates,duties,title} =jobs[value]
    return (
        <section>
            <div className="title">
                <h2>experience</h2>
                <div className="underline"></div>
            </div>

            <div className="jobs-center">
                  
                  {/* button container  */}
                <div className="btn-container">
                    {
                        jobs.map((item,index)=>{
                            return(
                                <button key = {item.id} onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'} `}>
                                    {item.company}
                                </button>

                            )
                        })
                    }
                </div>

                  {/* job Info */}
                  <article className="job-info">
                      <h3>{title}</h3>
                      <h4>{company}</h4>
                      <p className="job-date">{dates}</p>
                      {
                          duties.map((duty,index)=>{
                              return(
                                  <div key={index} className="job-desc">
                                      <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                                      <p>{duty}</p>
                                  </div>
                              )
                          })
                      }

                  </article>
            </div>

            <button type="button" className="btn">
        more info
      </button>

        </section>
    )
}

export default Tabs

