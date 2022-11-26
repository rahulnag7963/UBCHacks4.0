import React from "react";
import "./App.css";
import Quest from "./Components/Quest";
import Information from "./Components/Information";
import Action from "./Components/Action";
function App() {
  return (
    <div className="app">
      <div className="left-panel">
        <div>
          <Quest />
        </div>
        <div>
          <Information />
        </div>
      </div>
      <div className="actionComponent">
        <Action />
      </div>
    </div>
  );
}

export default App;
