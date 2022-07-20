import React from 'react'
import { useState } from 'react'
import './Box.css'
import axios from 'axios'

const Box = () => {

    const [doors, setDoors] = useState(false);
    const [joke, setJoke] = useState("");

    
    
    const url = (`https://v2.jokeapi.dev/joke/Any`);

    const getJoke = () => {
        axios.get(url).then((result) => {
            console.log("Joke: ")
            // console.log(result.data.setup + "..." + result.data.delivery)
            setJoke(result.data.setup + "..." + result.data.delivery)
        })
    }
 
    const openDoors = () => {
        setDoors((prevState) => !prevState)
    }

    const doubleFunction = () => {
        getJoke();
        openDoors();
    }

  return (
    <>
    <div className="Container">
        <div className={doors ? "Outer-Door-Left Left-Door " : "Outer-Door-Left"}></div>

        <div className={doors ? "Inner-Door-Top Top-Door " : "Inner-Door-Top"}></div>


        <div className="Joke-Box">
            <p id="Joke">{joke}</p>
        </div>

        {/* <video src={('https://videos.ctfassets.net/adclj4ijug4e/2i2amXQjhbrtpbldae6hwy/fc4d86a18bf233a667ff0c54f354437f/maps_video.mp4')} autoPlay loop className="Video"></video> */}

        <div className={doors ? "Inner-Door-Bottom Bottom-Door " : "Inner-Door-Bottom"}></div>

        <div className={doors ? "Outer-Door-Right Right-Door " : "Outer-Door-Right"}></div>
    </div>

    <button onClick={doubleFunction} className='Revealer Reveal-Button'><p>Toggle</p></button>
    {/* <button className='Revealer Hide-Button'>Close Sesame</button> */}
    </>
  )
}

export default Box