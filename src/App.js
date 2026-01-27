import React from 'react';
import { useContext } from 'react';

import Questions from './Components/Questions'
import Result from './Components/Result'
import Start from './Components/Start'
import End from './Components/Start'

import { QuizContext } from './Context/Quiz';


const App = () => {
  const {start, exit} = useContext(QuizContext);
  return (
    <>
    const renderScreen = () => {
  switch (screen) {
    case "start":
      return <Start onBegin={() => setScreen("questions")} />;

    case "questions":
      return <Questions onFinish={() => setScreen("result")} />;

    case "result":
      return <Result onRestart={() => setScreen("start")} />;

    default:
      return null;
  }
};
    </>
  )
}

export default App
