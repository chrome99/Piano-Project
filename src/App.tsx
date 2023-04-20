import React from "react";
import "./App.css";
import Key from "./Key";

function App() {
  return (
    <div id="appContainer">
      <div id="keyContainer">
        <Key note={"C"} onKey={"a"} />
        <Key note={"C+"} onKey={"A"} sharp={true} />
        <Key note={"D"} onKey={"s"} />
        <Key note={"D+"} onKey={"S"} sharp={true} />
        <Key note={"E"} onKey={"d"} />
        <Key note={"F"} onKey={"f"} />
        <Key note={"F+"} onKey={"F"} sharp={true} />
        <Key note={"G"} onKey={"g"} />
        <Key note={"G+"} onKey={"G"} sharp={true} />
        <Key note={"A"} onKey={"h"} />
        <Key note={"A+"} onKey={"H"} sharp={true} />
        <Key note={"B"} onKey={"j"} />
        <Key note={"C2"} onKey={"k"} />
      </div>
    </div>
  );
}

export default App;
