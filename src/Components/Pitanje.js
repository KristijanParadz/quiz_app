import {React, useState} from 'react'

export default function Pitanje(props) {
    const {
        pitanje
    } = props

    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }

    function handleOnClickSpan(e){
      if(e.target.innerText === pitanje.correct_answer){
        //e.target.classList.add("correct")
        e.target.style.backgroundColor="chartreuse"
      }
    }
    

    const [odgovori,setOdgovori]=useState(shuffle([pitanje.correct_answer, ...pitanje.incorrect_answers]))
  return (
    <div className='pitanje'>
      <div className='pitanje-text'>{pitanje.question}</div>
      <div className='odgovori'>
          {odgovori.map(odgovor=>{
            return <span onClick={handleOnClickSpan} key={odgovor}>{odgovor}</span>
          })}
      </div>
    </div>
  )
}
