import React from "react";
import ReactDOM from "react-dom";

// import component
import Main from "./main";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Hello CodeSandbox</h1>
      </header>
      <main>
        <Main />
      </main>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
