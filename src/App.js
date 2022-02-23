import {React, useState,useEffect} from 'react'
import './App.css';
import Header from './Components/Header';
import QuestionSection from './Components/QuestionSection';



function App() {

  const [categories,setCategories]=useState(["Any Category","General Knowledge", "Entertaiment: Books", "Entertaiment: Film", "Entertaiment: Music", "Entertaiment: Musicals & Theatres", "Entertaiment: Television", "Entertaiment: Video Games", "Entertaiment: Board Games", "Science & Nature", "Science: Computers", "Science: Mathematics", "Mythology", "Sports", "Geography", "History", "Politics", "Art", "Celebrities", "Animals", "Vehicles", "Entertainment: Comics", "Science: Gadgets", "Entertainment: Japanese Anime & Manga", "Entertainment: Cartoons & Animations"])
  const [selectedCategory, setSelectedCategory]=useState(categories[0])
  const [numberOfQuestions, setNumberOfQuestions]=useState(10)
  const [questions,setQuestions]=useState([])
  
  return (
    <div className='background'>
      <Header categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} 
      numberOfQuestions={numberOfQuestions} setNumberOfQuestions={setNumberOfQuestions} questions={questions} setQuestions={setQuestions} />
      <QuestionSection questions={questions}/>
    </div>
  );
}

export default App;
