import React, { useEffect, useState } from 'react'
import Question from './Question';

const url="https://jsonplaceholder.typicode.com/comments";

const Questions = () => {
    const [questions,setQuestions]=useState([]);

    const fetchQuestions = async() =>{
         try {
             const responsoe = await fetch(url);
             const questions= await responsoe.json();
             console.log(questions);
             setQuestions(questions);
         } catch (error) {
             console.log(error);
         }
    }
    useEffect(()=>{
        fetchQuestions();
    },[])

    return (
        <div>
            {
                questions.map((question)=>{
                  return  <Question key={question.id} {...question} />
                })
            }
           
        </div>
    )
}

export default Questions
