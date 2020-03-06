import React, { useReducer } from "react"
import "./App.css"
import ParentComponent from './callbackComponents/ParentComponent.js'

function App() {
  return (
    <div className="App">
      <ParentComponent/>
    </div>
  )
}

export default App
