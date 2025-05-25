import React from 'react'
import "./MenuLink.css"
function MenuLink(probs) {
  return (
    
   <>
   <a href={probs.url}
   className='link'>{probs.linkName}</a>
   </>
  ) 
}

export default MenuLink