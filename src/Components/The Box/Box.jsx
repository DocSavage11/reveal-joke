import React from 'react'
import './Box.css'

const Box = () => {
  return (
    <>
    <div className="Container">
        <div className="Outer-Door-Left"></div>

        <div className="Inner-Door-Top"></div>



        <div className="Inner-Door-Bottom"></div>

        <div className="Outer-Door-Right"></div>
    </div>

    <button className='Revealer Reveal-Button'>Open Sesame</button>
    <button className='Revealer Hide-Button'>Close Sesame</button>
    </>
  )
}

export default Box