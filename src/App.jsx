
import './App.css';
import { Timer } from "./components/Timer";
import { StopWatch} from "./components/StopWatch"
import { useState } from 'react';

function App() {

  const [show, setShow] = useState(true)
  const [border, setBorder] = useState(false)

  return (
    <div className="App">
      <div className='flex'>
        <div className={`${border}`} onClick={() => {
          setShow(false)
          setBorder(true)
        }} >TIMER</div>
        <div className={`${show}`} onClick={() => {
          setShow(true)
          setBorder(false)
        }} >STOPWATCH</div>
      </div>
      {show ?  <StopWatch /> : <Timer/>}
    </div>
  );
}

export default App;
