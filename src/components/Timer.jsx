import { useState, useRef } from "react";
import './StopWatch.css';

export const Timer = () => {
    
    const [toggle, setToggle] = useState(true)
    
    const [counter, setCounter] = useState(0);
   
    const [second , setSecond] = useState(0)
  
    const counterRef = useRef(null);
   

   
//    const startInterval = () => {
//        counterRef.current =  setInterval(() => {
//            setCounter((p) => p - 1 );
//        },1000)
//     }
    const startInterval = () => {
        counterRef.current =  setInterval(() => {
            setCounter((p) => {
                 if (p > 0) {
                     return p - 1;
                }else {
                return 0
                }
                
            });
        },1000)
    }
   
    const handlesecond = (e) => {
        console.log("se",e.target.value)
        setSecond(e.target.value)
    }


   return (
       <div className="stopwatch">
           {/* <div className="timer">Timer</div> */}
         
           <input className="time" type="Number" placeholder="Enter time in Seconds" onChange={handlesecond} />
           {/* <h1>{Math.floor(counter /6000)}m : {Math.floor((counter%6000)/100)}s : {counter%100}</h1> */}
           <h1>  {Math.floor(counter / 3600)}h : {Math.floor((counter % 3600) / 60)}m : {counter % 60}s</h1>
           
           {toggle ? <button className="start" onClick={() => { 
               setCounter(second)
               startInterval()
               setToggle(!toggle)
           }}>Start</button> :   <button className="start" onClick={() => {
                   clearInterval(counterRef.current)
                   setToggle(!toggle)
           }}>Stop</button>}
           
           <button className="start" onClick={() => {
               clearInterval(counterRef.current)
               setCounter(0);
               setToggle(true)
           }} >Reset</button>

       </div>
   )
}