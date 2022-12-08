import React from "react";
import Header from "./Header";
import Parameters from "./Parameters";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        <span>☁️Weathering With You☁️ </span>
      </h1>
      <Header />
      <Parameters />
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
