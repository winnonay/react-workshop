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
      <footer className="footer">
        <a
          href="https://github.com/winnonay/react-workshop.git" 
          rel="noopener noreferrer"
          target="_blank"
          autoFocus="on"
        >
          Open source code
        </a>
        {" "}
      by
      {" "}
      <a 
      href="https://dazzling-marigold-4d0e06.netlify.app/" 
      rel="noopener noreferrer" 
      target="_blank" 
      autoFocus="on">
        Winnie Li
        </a>
      </footer>
    </div>
  );
}
