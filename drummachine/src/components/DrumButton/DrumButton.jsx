import React, { useRef } from 'react'
import './DrumButton.css'

const DrumButton = (props) => {
  document.addEventListener('keydown', handleKeyPress)
  const audioRef = useRef(null)

  function handleKeyPress (e) {
    if (e.key.toUpperCase() === props.keyboardCase) {
      playAudio()
    }
  }
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
    props.setDisplayText(props.id)
  }

  return (
    <button id={props.id} className='drum-pad' onClick={() => playAudio()}>
      <audio ref={audioRef} className='clip' id={props.keyboardCase} src={props.audioSrc} />
      <p>{props.keyboardCase}</p>
    </button>
  )
}

export default DrumButton
