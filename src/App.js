import React from "react"
import "./App.css"
import FocusInput from "./refComponents/FocusInput"
import ClassTimer from "./refComponents/ClassTimer"
import HookTimer from "./refComponents/HookTimer"

function App() {
  return (
    <div className="App">
      {/* <FocusInput/> */}
      <ClassTimer/>
      <HookTimer/>
    </div>
  )
}

export default App
