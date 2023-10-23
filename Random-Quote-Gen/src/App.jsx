import Quotes from './Components/Quotes/Quotes'
import './App.css'
import jsonData from './quotes-list.json'
import { useState } from 'react'
function App () {
  const newIndex = () => {
    setIndex(Math.floor(Math.random() * 102))
  }

  const [index, setIndex] = useState(0)

  return (
    <>
      <div className='app-wrapper'>
        <Quotes
          quote={jsonData.quotes[index].quote}
          author={jsonData.quotes[index].author}
          handleClick={newIndex}
        />
      </div>

    </>
  )
}

export default App
