import React from "react";
import Weather from "./Weather";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        <span>☁️Weathering With You☁️ </span>
      </h1>
     <Weather defaultCity="New York"/>
      <footer>
        <a
          href="https://github.com/winnonay/react-workshop.git" 
          rel="noopener noreferrer"
          target="_blank"
          autoFocus="on"
        >
          Open source code
        </a>
      </footer>
    </div>
  );
}
