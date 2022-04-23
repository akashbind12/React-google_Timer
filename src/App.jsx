
import './App.css';
import { Timer } from "./components/Timer";
import { StopWatch} from "./components/StopWatch"
import { useState } from 'react';

function App() {

  const [show, setShow] = useState(true)

  return (
    <div className="App">
      {/* <Timer/> */}
      <div className='flex'>
        <div onClick={() => (
          setShow(!show)
        )} >TIMER</div>
        <div onClick={() => (
          setShow(!show)
        )} >STOPWATCH</div>
      </div>
      {show ?  <StopWatch /> : <Timer/>}
      {/* <StopWatch />
      <Timer/> */}
    </div>
  );
}

export default App;
