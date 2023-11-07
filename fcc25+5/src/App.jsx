import './App.css'
import { useEffect, useRef, useState } from 'react'
import LengthControl from './components/LengthControl/LengthControl'
import Timer from './components/Timer/Timer'

function App () {
  const [timeLeft, setTimeLeft] = useState(25)
  const [secondsLeft, setSecondsLeft] = useState(0)

  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)

  const [isRunning, setIsRunning] = useState(false)
  const [isSession, setIsSession] = useState(true)

  const audioRef = useRef(null)

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
  }

  const resetSound = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  function handleSessionIncrement () {
    if (sessionLength < 60) {
      setSessionLength((actualState) => actualState + 1)
      setTimeLeft((actualState) => actualState + 1)
    }
  }
  function handleSessionDecrement () {
    if (sessionLength > 1) {
      setSessionLength((actualState) => actualState - 1)
      setTimeLeft((actualState) => actualState - 1)
    }
  }
  function handleBreakIncrement () {
    if (breakLength < 60) {
      setBreakLength((actualState) => actualState + 1)
    }
  }

  function handleBreakDecrement () {
    if (breakLength > 1) {
      setBreakLength((actualState) => actualState - 1)
    }
  }

  function handleStart () {
    setIsRunning((actualValue) => !actualValue)
  }

  function handleReset () {
    setIsRunning(false)
    setIsSession(true)

    setBreakLength(5)
    setTimeLeft(25)

    setSecondsLeft(0)
    setSessionLength(25)

    resetSound()
  }

  useEffect(() => {
    setTimeLeft(isSession ? sessionLength : breakLength)
    setSecondsLeft(0)
  }, [isSession])

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        if (secondsLeft > 0) {
          setSecondsLeft((actualState) => actualState - 1)
        } else if (timeLeft > 0) {
          setTimeLeft((actualState) => actualState - 1)
          setSecondsLeft(59)
        } else if (timeLeft === 0 && secondsLeft === 0) {
          playSound()
          setIsSession((actualValue) => !actualValue)
        } else if (timeLeft < 0 || secondsLeft < 0) {
          setSecondsLeft(0)
          setTimeLeft(0)
        }
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isRunning, timeLeft, secondsLeft, isSession, breakLength, sessionLength])
  return (
    <div className='timer-wrapper'>
      <div className='length-control_wrapper'>
        <LengthControl
          id='break-label'
          incrementid='break-increment'
          decrementid='break-decrement'
          numberid='break-length'
          title='Break Length'
          time={breakLength}
          handleIncrement={() => handleBreakIncrement()}
          handleDecrement={() => handleBreakDecrement()}
        />

        <LengthControl
          id='session-label'
          incrementid='session-increment'
          decrementid='session-decrement'
          numberid='session-length'
          title='Session Length'
          time={sessionLength}
          handleIncrement={() => handleSessionIncrement()}
          handleDecrement={() => handleSessionDecrement()}
        />
      </div>

      <Timer
        time={timeLeft}
        secondsLeft={secondsLeft}
        handleStart={() => handleStart()}
        handleReset={() => handleReset()}
        isRunning={isRunning}
        isSession={isSession ? 'Session' : 'Break'}
      />

      <audio
        id='beep'
        ref={audioRef}
        preload='auto'
        src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
      />

    </div>
  )
}

export default App
