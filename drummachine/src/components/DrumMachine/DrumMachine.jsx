import React, { useState } from 'react'
import './DrumMachine.css'
import { DrumButton } from '../components'

const DrumMachine = (props) => {
  const [displayText, setDisplayText] = useState('')

  return (
    <div id='drum-machine' className='drummachine-wrapper'>
      <div className='drum-pads'>
        <DrumButton setDisplayText={setDisplayText} id='Heater 1' keyboardCase='Q' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' />
        <DrumButton setDisplayText={setDisplayText} id='Heater 2' keyboardCase='W' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' />
        <DrumButton setDisplayText={setDisplayText} id='Heater 3' keyboardCase='E' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' />
        <DrumButton setDisplayText={setDisplayText} id='Heater 4' keyboardCase='A' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' />
        <DrumButton setDisplayText={setDisplayText} id='Clap' keyboardCase='S' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' />
        <DrumButton setDisplayText={setDisplayText} id='Open HH' keyboardCase='D' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' />
        <DrumButton setDisplayText={setDisplayText} id='Kick n Hat 1' keyboardCase='Z' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' />
        <DrumButton setDisplayText={setDisplayText} id='Kick' keyboardCase='X' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' />
        <DrumButton setDisplayText={setDisplayText} id='Closed HH' keyboardCase='C' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' />
      </div>
      <div id='display' className='drum-machine'>
        <span>{displayText}</span>
      </div>
    </div>
  )
}

export default DrumMachine
