import React from 'react'
import './Quotes.css'

const Quotes = (props) => {
  return (
    <div id='quote-box'>
      <div id='quote-wrapper'>
        <span id='text'>"{props.quote}"</span>
      </div>
      <div id='quote-author'>
        <span id='author'>-{props.author}</span>
      </div>
      <div id='buttons'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a id='tweet-quote' href={`https://www.twitter.com/intent/tweet?hashtags=quotes&text=${props.quote}`}><img id='icon' src='/twitter-icon.svg' /></a>
          <div style={{ width: 25 }} />
          <a id='github' href='https://github.com/valdoryon/freeCodeCamp-challenges/tree/main/Random-Quote-Gen'><img id='icon' src='/github-icon.svg' /></a>
        </div>
        <button onClick={props.handleClick} id='new-quote'>New quote</button>

      </div>

    </div>
  )
}

export default Quotes
