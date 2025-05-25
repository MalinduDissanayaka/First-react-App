import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'

function App() {
  

  return (
    <>
      
      <Header/>
      <Body>
        <button>click here</button>
      </Body>
      <Body>

        <p>Heinrich Klaasen, POTM: The franchise spends a
           lot of money on this. We had a bad start and 
           middle, we fought to turn it around in the last 
           three games. Nice to give something back to them. 
           There was individual pride as well. I didn't go on
            in a few games, did so tonight. Plan was to go straight on this ground. I got my trajectory better, didn't take on too many fielders. Pleased with that. I worked a lot on judging length, it's getting me out a couple of times, so I've had to work 
          on it in the nets a lot. After the powerplay is when I'd ideally go, but I get paid to do well whenever I go in.</p>
      </Body>
      
      
    </>
    
  )
}

export default App
