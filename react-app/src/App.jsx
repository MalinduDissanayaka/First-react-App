import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Body/Body.css'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'

function App() {
  
function hello1(e){
  console.log("hello1",e.target)
}
const hello2 = (e)=>{
  console.log("hello2",e)

}

function hello3(name,e){
  console.log("hello3 " + name,e)
}

const hello4 = (name)=>{
  console.log("hello4 " +name  )

}

const  sty={fontSize:30,background:'#c4f0ea' }


const [num1,setnum1]=useState(0);

function onclickhadle() {

  setnum1 (num1 +1)
}
function onclickhadle2() {

  setnum1 (num1 - 1)
}
  return (
    <>
      
      <Header/>
      <Body>
        <button onClick={hello1}>click1</button>
        <button onClick={hello2}>click 2</button>
        <button onClick={(e)=> {hello3("malindu",e)}}>click 3</button>
        <button onClick={()=> {hello4("thARKA")}}>click 3</button>
        <button onClick={onclickhadle}>+</button>
        <button onClick={onclickhadle2}>-</button>
        <p>{num1}</p>
      </Body>
      <Body>

        <p style={sty}>Heinrich Klaasen, POTM: The franchise spends a
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
