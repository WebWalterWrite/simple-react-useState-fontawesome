import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const [stars, setStars] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Hello CodeSandbox</h1>
      </header>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
