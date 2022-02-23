import {React, useState } from 'react'

const MAIN_API="https://opentdb.com/api.php?amount="

export default function Header(props) {
    const {
        categories,
        selectedCategory,
        setSelectedCategory,
        numberOfQuestions,
        setNumberOfQuestions,
        questions,
        setQuestions
    }=props

    

    function handleChangeCategory(e){
        setSelectedCategory(e.target.value)
    }

    function handleChangeNumber(e){
        if(e.target.value>0 && e.target.value<50){
            setNumberOfQuestions(e.target.value)
        }
    }

    function handleOnClick(){

        if(selectedCategory===categories[0]){
            fetch(`${MAIN_API}${numberOfQuestions}`).then(res=>res.json()).then(data=>{
                setQuestions(data.results)
            })
            return
        }

        fetch(`${MAIN_API}${numberOfQuestions}&category=${categories.indexOf(selectedCategory)+8}`).then(res=>res.json()).then(data=>{
            setQuestions(data.results)
        })
    }

  return (
    <div className='header'>
      <div className='category'>
        <div className='text'>Category</div>
        <select value={selectedCategory} onChange={handleChangeCategory}>
            {categories.map(category=>{
                return <option key={category}>{category}</option>
            })}
        </select>
      </div>
      <div className='number-of-questions'>
          <div className='text'>Number Of Questions</div>
          <input type="number" value={numberOfQuestions} onChange={handleChangeNumber}></input>
      </div>
      <button onClick={handleOnClick}>Generate</button>
    </div>
  )
}
