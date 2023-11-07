import React from 'react'
import './LengthControl.css'

const LengthControl = (props) => {
  return (
    <div className='length-control'>
      <button id={props.incrementid} onClick={props.handleIncrement}>^</button>
      <span id={props.id}>
        {props.title}
      </span>
      <span id={props.numberid}>
        {props.time}
      </span>
      <button id={props.decrementid} onClick={props.handleDecrement}>v</button>
    </div>
  )
}

export default LengthControl
