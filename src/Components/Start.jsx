import React, { useContext } from 'react'
import { QuizContext } from '../Context/Quiz'

import vector from '../Images/Vector.png';
import group3 from '../Images/Group 3.png';

const Start = () => {
    const {setStart} = useContext(QuizContext)
  return (
    <div className='card flex flex-col w-full h-full  items-center bg-gradient-to-t from-purple-500 to-purple-50'>
    <div className='flex flex-row py-20'>
       <img src={vector} alt='image1'/>
       <span className='text-3xl'>upraised</span>
    </div>
    <div>
      <img className='w-[432px] h-[396px] p-20' src={group3} alt='image2'/>
    </div>
    <div>
      <button className='m-14 py-4 px-12 rounded-full bg-red-500' onClick={() => setStart(true)}>Start</button>
    </div>
       
    </div>
    
  )
}

export default Start