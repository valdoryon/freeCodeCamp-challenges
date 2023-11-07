import React from 'react'
import './Timer.css'

const Timer = (props) => {
  return (
    <div className='timer'>
      <div>
        <p id='timer-label'>
          {props.isSession}
        </p>
        <div>
          <p id='time-left'>
            {props.time < 10 ? '0' + props.time : props.time}:{props.secondsLeft < 10 ? '0' + props.secondsLeft : props.secondsLeft}
          </p>
        </div>
      </div>
      <div className='timer-control'>
        <button id='start_stop' onClick={props.handleStart}>{props.isRunning ? 'Stop' : 'Start'}</button>
        <button id='reset' onClick={props.handleReset}>Reset</button>
      </div>

    </div>
  )
}

export default Timer
