import React from 'react'
import { useState } from 'react'
import './Box.css'

const Box = () => {

    const [doors, setDoors] = useState(false);

    const openDoors = () => {
        setDoors((prevState) => !prevState)
    }

  return (
    <>
    <div className="Container">
        <div className={doors ? "Outer-Door-Left Left-Door " : "Outer-Door-Left"}></div>

        <div className={doors ? "Inner-Door-Top Top-Door " : "Inner-Door-Top"}></div>



        <div className={doors ? "Inner-Door-Bottom Bottom-Door " : "Inner-Door-Bottom"}></div>

        <div className={doors ? "Outer-Door-Right Right-Door " : "Outer-Door-Right"}></div>
    </div>

    <button onClick={openDoors} className='Revealer Reveal-Button'>Open Sesame</button>
    <button className='Revealer Hide-Button'>Close Sesame</button>
    </>
  )
}

export default Box