import Quotes from './Components/Quotes/Quotes'
import './App.css'
import jsonData from './quotes-list.json'
import { useState } from 'react'
function App () {
  const newIndex = () => {
    return Math.floor(Math.random() * 102)
  }

  const [index, setIndex] = useState(newIndex)

  return (
    <>
      <div className='app-wrapper' style={{ backgroundColor: 'var(--main-background-color)' }}>
        <Quotes
          quote={jsonData.quotes[index].quote}
          author={jsonData.quotes[index].author}
          handleClick={() => setIndex(newIndex)}
        />
      </div>

    </>
  )
}

export default App
