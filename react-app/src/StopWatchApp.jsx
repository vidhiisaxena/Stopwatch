import React, { useState } from "react";
import Stopwatch from "./Stopwatch";

function StopwatchApp() {
  const[titleInput, setTitleInput]= useState("");
  const[timer, setTimer]= useState([]);

  function handleAddTimer(){

  }
  return (
    <div className="stopwatch-app">
      <h2>Multi-Stopwatch App</h2>
      <div>
        <input
          type="text"
          value={titleInput}
          placeholder="Enter stopwatch title"
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <button onClick={handleAddTimer}>Add Stopwatch</button>
      </div>

      <div className="stopwatch-list">
        {timer.map((timer) => (
          <Stopwatch key={timer.id} title={timer.title} />
        ))}
      </div>
    </div>
  );
}

export default StopwatchApp;
