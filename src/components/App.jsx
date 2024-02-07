import React, { useState } from "react";

function App(){

    const now = new Date().toLocaleTimeString();
    const[time,gettime]=useState(now)

    function currentTime(){
        const present = new Date().toLocaleTimeString();
        gettime(present);
    }

    return(
        <div className="container">
        <h1>{time}</h1>
        <button onClick={currentTime}>Get Time</button>
        </div>

    );
}

export default App;