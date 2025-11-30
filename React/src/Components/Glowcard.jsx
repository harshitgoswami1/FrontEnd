import React from 'react'
import './Glowcard.css'

function Glowcard() {
  return (
    <div className='bg-black text-white flex flex-col  items-center justify-center w-full h-screen'>
      <div className='box h-[400px] w-[300px] flex flex-col rounded-xl'>
        <div className='flex flex-col items-center mt-5'>
            <img className='h-[200px] w-[250px]' src=".\src\assets\img1.png" alt="" />
        </div>
        <div className='mt-5 ml-5'>
            <h1 className='text-3xl font-bold'>The Cult</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, nulla!</p>
        </div>
      </div>
    </div>
  )
}

export default Glowcard