import React from "react";
import Weather from "./Weather";
import myGif from "./greeting.gif";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
     <img src={myGif} 
           alt="hello" 
           width="75px"
           height="60px"
            />
      <h1> 
       Weathering With You
      </h1>
     <Weather defaultCity="New York" />
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
