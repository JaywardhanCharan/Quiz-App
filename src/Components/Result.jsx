import React, { useContext } from 'react'
import { QuizContext } from '../Context/Quiz'


const Result = () => {
    const {correct,setExit,setStart,quizzes} = useContext(QuizContext);

    const startAgain = () => {
        setExit(false);
        setStart(false);
    }
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-t from-purple-500 to-purple-50'>
        <div className='w-[50%] h-[50%]  rounded-md overflow-hidden text-center'>
            <h1 className='text-4xl p-8'>Your Result</h1>
            <h2 className='text-3xl p-5'>{correct} are correct out of {quizzes.length}</h2>
            <button onClick={startAgain} className=' text-white rounded-full border border-orange-300 p-3 text-4xl rounded m-12 bg-red-600'>Start Again</button>
        </div>
    </div>
  )
}

export default Result