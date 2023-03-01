import React from 'react'
import background from "../Assets/Images/background.jpg"

function Main() {
  return (
    <div className='background '>
        <img className='img-fluid1' src={background} alt='background'/>
        <div className='container-fluid floating-label text-center text-white'>
            <p className='mt-2 head-label'>Delicious Food, Delilvered to you</p>
            <p className='label'>Choose your favorite meal from our broad section of available meals and enjoy a delisious lunch/dinner at home</p>
            <p className='label'>All our meals are cooked with high-quality ingradients just-in-time and of course by experienced chiefs!</p>
        </div>        
    </div>
  )
}

export default Main