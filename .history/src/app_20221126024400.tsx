import React from "react";
import "./app.css";
import Quest from "./Components/Quest";
import Information from "./Components/Information";
import Action from "./Components/Action";
function app() {
  return (
    <div className="app">
      <Quest />
      <Information />
      <div className="ActionComponent">
        <Action />
      </div>
    </div>
  );
}

export default app;
