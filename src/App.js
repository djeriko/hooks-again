import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HooksCounter from './components/HooksCounter';
import HooksCounterTwo from './components/HooksCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HooksCounter/> */}
      {/* <HooksCounterTwo/> */}
      {/* <HookCounterThree/> */}
      <HookCounterOne/>
      {/* <HookCounterFour/> */}
    </div>
  );
}

export default App;
