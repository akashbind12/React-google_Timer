import { useState, useRef } from "react";
import './StopWatch.css';


export const StopWatch = () => {
   const [counter, setCounter] = useState(0);
   const [toggle, setToggle] = useState(true)
   // const [counterminute, setCounterminute] = useState(0);
   const counterRef = useRef(null);

   
   const startInterval = () => {
       counterRef.current =  setInterval(() => {
           setCounter((p) => p + 1);
       },10)
   }


   return (
       <div className="stopwatch">
           {/* <div className="stop">Stopwatch</div> */}
           <h1> { Math.floor(counter/6000)}m : {Math.floor((counter%6000)/100)}s : {counter%100}</h1>
           
            {toggle ? <button className="start" onClick={() => {
               startInterval()
               setToggle(!toggle)
           }}>Start</button> :   <button className="start"  onClick={() => {
                   clearInterval(counterRef.current)
                   setToggle(!toggle)
           }}>Stop</button>}
           
           <button className="start"  onClick={() => {
               clearInterval(counterRef.current)
               setCounter(0);
               setToggle(true)
           }} >Reset</button>

       </div>
   )
}