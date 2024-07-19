import { useState } from 'react'
import './App.css'

function AlertButton({msg, children}){
  return(
    <button onClick={()=>alert(msg)}>
      msg: {msg} 
      <br />
      {children}
    </button>
  )
}

function App() {
  function handleClick(){
    alert('you clicked me...')
  }

  return (
    <>
      <h2>1 - Responding to Events</h2>
      <h3>1.1 - Add event handler</h3>
      <p>Define a function & pass it as a prop (to JSX tag)</p>
      <button>I don't do anything</button>
      <button onClick={handleClick}>handle click</button>

      <h3>1.2 - Reading props in event handlers</h3>
      <AlertButton msg='Playing!'></AlertButton>
      <AlertButton msg='Uploading!'></AlertButton>
      <AlertButton msg='CHILDREN!'>
        children text
      </AlertButton>

      <h3>1.3 - Passing Event Handlers as props</h3>
      
    </>
  )
}

export default App
