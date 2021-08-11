import React from 'react';
import './App.css';

function App() {

 

const[date,setDate]=React.useState(""); 
const[d,setD]=React.useState(); 
const[h,setH]=React.useState();
const[m,setM]=React.useState();
const[s,setS]=React.useState();

const handleChange=(e)=>
{
  setDate(e.target.value);
}


const val=()=>{
var future=Date.parse(date);
var now=new Date();
var diff=future-now;
let days = Math.floor(diff / (1000 * 60 * 60 * 24));
let   hours = Math.floor(diff / (1000 * 60 * 60));
let  mins = Math.floor(diff / (1000 * 60));
let  secs = Math.floor(diff / 1000);

let d = days;
let h = hours - days * 24;
let m = mins - hours * 60;
let s = secs - mins * 60;

setD(d);
setH(h);
setM(m);
setS(s);
}



React.useEffect(() => {
  const interval = setInterval(val,1000);
  return () => clearInterval(interval);
});  


 

  return (
    <div className="App">
      <body>
        <h1>COUNTDOWN TIMER</h1>
        
        <div className="disp">
        <div>{d}
        <span> Days</span>
        </div> 
        <div>{h}
        <span> Hours</span>
        </div> 
        <div>{m}
        <span> Minutes</span>
        </div> 
        <div>{s}<span>  Seconds</span>
        </div>

        </div>
        <div className="inputbox">
          <input name="Date" className="input" placeholder="eg:jun 12, 2022 01:30:00" onChange={handleChange}></input>
          
        </div>
        
      </body>
    </div>
  );
  
}

export default App;
