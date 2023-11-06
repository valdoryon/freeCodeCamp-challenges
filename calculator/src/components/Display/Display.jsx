import React from 'react'
import './Display.css'

const Display = (props) => {
  return (
    <div id='display'>
      <span>
        {props.formula}
      </span>
      <span>
        {props.display}
      </span>
    </div>
  )
}

export default Display
