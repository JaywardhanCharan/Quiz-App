import React, { useContext, useState } from 'react';
import { QuizContext } from '../Context/Quiz';

const Questions = () => {
    const [current, setCurrent] = useState(0);
    const {correct} = useContext(QuizContext);
  return (
    <div className='w-full h-screen flex justify-center items-center'>
    <h1>{correct}</h1>
        <Box current={current} next={setCurrent}/>
    </div>
  )
}

export default Questions


const Box = ({current,next}) => {
    const {quizzes,correct,setCorrect,setExit} = useContext(QuizContext);
    const [ans, setAns] = useState('');

    const nextHandler = () => {
        if(quizzes[current].correct === ans){
            setCorrect(correct+1);
        }
        setAns('');
        if((current+1) === quizzes.length){
            setExit(true)
        }else{
            next(current+1);
        }
    }
    // console.log(quizzes[current]);
    return(
        <div className='m-10 p-10 w-full h-full border shadow-lg rounded overflow-hidden bg-gradient-to-t from-purple-500 to-purple-50'>
            <div className='text-3xl'>{current+1}) {quizzes[current].question}</div>
            <div className='grid grid-cols-1 mt-5'>
                <div className={`p-4 border ${ans === 'a' ? 'bg-blue-400 text-white' : ''}
                   hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns('a')}>{quizzes[current].a}</div>
                <div className={`p-4 border ${ans === 'b' ? 'bg-blue-400 text-white' : ''}
                   hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns('b')}>{quizzes[current].b}</div>
                <div className={`p-4 border ${ans === 'c' ? 'bg-blue-400 text-white' : ''}
                   hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns('c')}>{quizzes[current].c}</div>
                <div className={`p-4 border ${ans === 'd' ? 'bg-blue-400 text-white' : ''}
                   hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns('d')}>{quizzes[current].d}</div>
            </div>
            <div className='flex flex-col'>
                <button className=' text-white rounded-full border border-orange-300 p-3  rounded m-5 bg-red-600' onClick={() => setAns('')}>Reset</button>
                <button className=' text-white rounded-full border border-orange-300 p-3  rounded m-5 bg-red-600' onClick={nextHandler}>Next</button>
            </div>

        </div>
    )


}

