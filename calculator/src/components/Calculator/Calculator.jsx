import React, { useEffect, useState } from 'react'
import './Calculator.css'
import CalculatorButton from '../CalculatorButton/CalculatorButton'
import Display from '../Display/Display'
import { evaluate } from 'mathjs'

const Calculator = () => {
  const [display, setDisplay] = useState('0')

  const [canUseDot, setCanUseDot] = useState(true)

  const symbolRegex = /[*+-]/g

  const isSymbol = (symbol) => {
    return ['+', '-', '/', '*', '.'].includes(symbol)
  }
  const isNumber = (number) => {
    return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(number)
  }

  const handleClear = () => {
    setDisplay('0')

    setCanUseDot(true)
  }

  const handleSymbol = (symbol) => {
    if (symbol === '.') {
      if (canUseDot) {
        setDisplay((prevDisplay) => prevDisplay + symbol)
        setCanUseDot(false)
      }
    } else if (symbol !== '.') {
      if (isSymbol(display) || display === '0') {
        setDisplay((prevDisplay) => prevDisplay + symbol)
        setCanUseDot(true)
      } else if (isSymbol(display[display.length - 1])) {
        if (symbol === '-' && display[display.length - 1] !== '-') {
          setDisplay((prevDisplay) => prevDisplay + symbol)
        } else {
          setDisplay((prevDisplay) => prevDisplay.substring(0, prevDisplay.length - 1).replace(symbolRegex, '') + symbol)
        }
      } else {
        setDisplay((prevDisplay) => prevDisplay + symbol)
        setCanUseDot(true)
      }
    }
  }

  const handleNumber = (symbol) => {
    if (display === '0' || isSymbol(display)) {
      setDisplay(symbol)
    } else {
      setDisplay((prevDisplay) => prevDisplay + symbol)
    }
  }

  const handleEquals = () => {
    setDisplay(evaluate(display).toString())
  }

  const buttonPress = (symbol) => {
    if (symbol === 'clear') {
      handleClear()
    } else if (symbol === 'equals') {
      handleEquals()
    } else if (isSymbol(symbol)) {
      handleSymbol(symbol)
    } else if (isNumber(symbol)) {
      handleNumber(symbol)
    }
  }

  useEffect(() => {

  }, [display])
  return (
    <div className='calculator-wrapper'>
      <Display display={display} formula={canUseDot} />
      <div className='calculator-buttons'>
        <CalculatorButton handleClick={() => buttonPress('.')} id='decimal' value='.' />
        <CalculatorButton handleClick={() => buttonPress('*')} id='multiply' value='*' />
        <CalculatorButton handleClick={() => buttonPress('/')} id='divide' value='/' />
        <CalculatorButton handleClick={() => buttonPress('clear')} id='clear' value='AC' />
        <CalculatorButton handleClick={() => buttonPress('7')} id='seven' value={7} />
        <CalculatorButton handleClick={() => buttonPress('8')} id='eight' value={8} />
        <CalculatorButton handleClick={() => buttonPress('9')} id='nine' value={9} />
        <CalculatorButton handleClick={() => buttonPress('-')} id='subtract' value='-' />

        <CalculatorButton handleClick={() => buttonPress('4')} id='four' value={4} />
        <CalculatorButton handleClick={() => buttonPress('5')} id='five' value={5} />

        <CalculatorButton handleClick={() => buttonPress('6')} id='six' value={6} />
        <CalculatorButton handleClick={() => buttonPress('+')} id='add' value='+' />
        <CalculatorButton handleClick={() => buttonPress('1')} id='one' value={1} />
        <CalculatorButton handleClick={() => buttonPress('2')} id='two' value={2} />
        <CalculatorButton handleClick={() => buttonPress('3')} id='three' value={3} />

        <CalculatorButton handleClick={() => buttonPress('equals')} id='equals' value='=' />

        <CalculatorButton handleClick={() => buttonPress('0')} id='zero' value={0} />
      </div>
    </div>
  )
}

export default Calculator
