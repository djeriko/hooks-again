import React, { useState, useEffect } from "react"

function HookCounterOne() {
  const [count, setCount] = useState(0)

  // This runs everytimes when component update
  useEffect(()=> {
    document.title = `You clicked ${count} times`
  }) 

  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounterOne
