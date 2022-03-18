import React, { useState } from 'react'

import { ContentSlide } from './BeforeAndAfterStyles'

const BeforeAnfAfter = ({ urlBefore, urlAfter }) => {

  const [ range, setRange ] = useState(50)

  const handleRange = (e) => {
    setRange(e.target.value);
  }

  return (
    <ContentSlide>
      <span className="label labelBefore">Before</span>
      <span className="label labelAfter" >After</span>
      <div id="before" css={`background: url(${urlBefore});`}>
        <div id="after" css={ ` width: ${range}%; background: url(${urlAfter})` } ></div>
      </div>
      <input 
        type="range" 
        min="0" 
        max="100"
        value= { range }
        onChange= { handleRange }
        id="slider" 
      />
    </ContentSlide>
  )
}

export default BeforeAnfAfter