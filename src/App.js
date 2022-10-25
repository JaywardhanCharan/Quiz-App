import React from 'react';
import { useContext } from 'react';

import Questions from './Components/Questions'
import Result from './Components/Result'
import Start from './Components/Start'

import { QuizContext } from './Context/Quiz';


const App = () => {
  const {start, exit} = useContext(QuizContext);
  return (
    <>
    {
      exit === false
      ?
      <>
    {
      start === true
      ?
      <Questions />
      :
      <Start />
    }
    </>
    :
      <Result />
    }
    </>
  )
}

export default App
