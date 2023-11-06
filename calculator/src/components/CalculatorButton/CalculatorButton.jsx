import React from 'react'
import './CalculatorButton.css'
const CalculatorButton = (props) => {
  return (
    <div onClick={props.handleClick} id={props.id} className='calculator-button'>
      <span>
        {props.value}
      </span>
    </div>
  )
}

export default CalculatorButton
