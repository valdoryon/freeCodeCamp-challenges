import React from 'react'
import './previewer.css'
import DOMPurify from 'dompurify'
import { marked } from 'marked'
const Previewer = (props) => {
  marked.use({
    breaks: true,
    gfm: true
  })

  const html = DOMPurify.sanitize(marked.parse(props.text))

  return (
    <div className='previewer-wrapper'>
      <div id='preview' dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default Previewer
