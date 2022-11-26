import React from "react";
import Quest from "./Components/Quest";
import Information from "./Components/Information";
import Action from "./Components/Action";
import QuestType from "./interfaces/QuestType";
import QuestGenerator from "./libraries/QuestGenerator";
import "./App.css";

function App() {
  const [quests, setQuests] = React.useState<QuestType[]>(QuestGenerator.getMany(5))

  return (
    <div className="app">
      <div className="left-panel">
        <div>
          <Quest quests={quests} />
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
