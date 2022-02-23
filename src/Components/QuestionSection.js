import React from 'react'
import Pitanje from "./Pitanje"

export default function QuestionSection(props) {
    const {
        questions
    } = props
  return (
    <div className='question-section'>
      {questions.map(pitanje=>{
          return <Pitanje key={pitanje.question} pitanje={pitanje}/>
      })}
    </div>
  )
}
