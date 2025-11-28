import React, {useState, useRef , useEffect} from 'react'

function Stopwatch({title}) {
  const [isRunning, setIsRunning]=useState(false);
  const [elapsedtime, setElapsedTime]= useState(0);
  const intervalIDref = useRef(null);
  const Timeref= useRef(0);
  useEffect(()=>{
    if(isRunning){
      intervalIDref.current= setInterval(()=>{
        setElapsedTime(Date.now()- Timeref.current);
      }, 10);
    }
    return() => {
      clearInterval(intervalIDref.current);
    }
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    Timeref.current= Date.now()- Timeref.current;
  }

  function stop(){
    setIsRunning (false) 
  }

  function reset(){
    setElapsedTime(0);
    setIsRunning(false)
  }

  function formatTime(){
    let hours= Math.floor(elapsedtime/ (1000*60*60));
    let minutes = Math.floor(elapsedtime / (1000 * 60) %60);
    let seconds= Math.floor(elapsedtime / (1000)%60);
    let miliseconds = Math.floor((elapsedtime %1000)/10);
    hours=String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");
    return(`${minutes}:${seconds}:${miliseconds}`)

  }
  <div>
    blah blah blah
    hehehehehh
    vovOINBEIOFCBEOIAFBN

   return (
    <>
      <h1 className='header'>Stopwatch</h1>
     <div className="StopWatch">
       <div className="display">{formatTime()}</div>
       <div className="controls">
         <button className="start-button" onClick={start}>Start</button>
         <button className="stop-button" onClick={stop}>Stop</button>
         <button className="reset-button" onClick={reset}>Reset</button>
       </div>
     </div>
     </>
   );
}

export default Stopwatch
