import React, { useEffect, useState } from 'react'

function Pomodoro() {
    const containerStyle = {
        textAlign: 'center',
        margin: '20px',
      };
    
      const timerStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      };
    
      const buttonStyle = {
        margin: '5px',
        padding: '5px',
        fontSize: '1em',
      };

    const [workDuration,setWorkDuration] = useState(25);
    const [breakDuration,setBreakDuration] = useState(5);
    const [worksecond,setWorkSecond] = useState(1500);
    const [breakSecond,setBreakSecond] = useState(300);
    const [type,setType] = useState("Work");
    const [resetFlag,setResetFlag] = useState(true)
    const [flag,setFlag] =useState(false);
    const [timerStarted, setTimerStarted] = useState(false);
    const [workSessions, setWorkSessions] = useState(0);
    const [breakSessions, setBreakSessions] = useState(0);
    useEffect(()=>{
       
        if(flag && type==="Work"){
            if(worksecond > 0){
                setTimeout(()=>setWorkSecond(worksecond-1),1000)
            }
            if(worksecond===0){
                alert('work duration is over')
                setType("Break");
                setWorkSecond(workDuration*60);
                setBreakSessions(breakSessions + 1);
            }
        }
        if(flag && type==="Break"){
            if(breakSecond > 0){
                setTimeout(()=>setBreakSecond(breakSecond-1),1000)
            }
            if(breakSecond===0){
                alert('Break duration is over')
                setType("Work");
                setBreakSecond(breakDuration*60);
                setWorkSessions(workSessions + 1);
            }
        }
        if (flag && !timerStarted) {
            setTimerStarted(true);
            setWorkSessions(1);
        }
    },[type,flag,worksecond,breakDuration,breakSecond,workDuration,timerStarted])
    const convertor=(sec)=>{
       let m = parseInt(sec/60).toString()
       let s = parseInt(sec%60).toString();
       if(m.length === 1) m="0"+m
       if(s.length === 1) s="0"+s
       return m+":"+s
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setWorkSecond(workDuration*60)
        setBreakSecond(breakDuration*60)
        setType("Work")
    }
    const handleReset=()=>{
        setResetFlag(true);
        setFlag(false)
        setBreakDuration(5);
        setWorkDuration(25);
        setWorkSecond(1500);
        setBreakSecond(300);
        setTimerStarted(false);
        setWorkSessions(0);
        setBreakSessions(0);
    }
  return (
    <div style={containerStyle}>
        <div>
            <h1 style={timerStyle}>{type==="Work"?convertor(worksecond):convertor(breakSecond)}</h1>
            <h1>{type==="Work"?"Work":"Break"}-Time</h1>
        </div>
        <div>
            <p>Work Sessions: {workSessions}</p>
            <p>Break Sessions: {breakSessions}</p>
        </div>
        <div>
            <button style={buttonStyle} onClick={()=>{setFlag(true);setResetFlag(false)}} disabled={flag}>Start</button>
            <button style={buttonStyle} onClick={()=>{setFlag(false);setResetFlag(false)}} disabled={!flag}>Stop</button>
            <button style={buttonStyle} onClick={handleReset} disabled={resetFlag}>Reset</button>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" value={workDuration}
                onChange={(e)=>setWorkDuration(e.target.value)} disabled={flag}/>
                <input type="number" value={breakDuration} 
                onChange={(e)=>setBreakDuration(e.target.value)} disabled={flag}/>
                <input style={buttonStyle} type="submit" value="set" disabled={flag}/>
            </form>
        </div>
    </div>
  )
}

export default Pomodoro