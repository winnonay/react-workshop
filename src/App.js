import React from "react";
import Weather from "./Weather";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        <span>☁️Weathering With You☁️ </span>
      </h1>
     
      <footer>
        <a
          href="https://github.com/winnonay/react-workshop.git"
          target="_blank"
          rel="noreferrer"
          autoFocus="on"
        >
          Open source code
        </a>
      </footer>
    </div>
  );
}
