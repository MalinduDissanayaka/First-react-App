import React from 'react'
import './Body.css'

function Body(probs) {
  return (
    <div id="body">
      <h3>main containt</h3>
      {probs.children}
    </div>
   
  )
}

export default Body