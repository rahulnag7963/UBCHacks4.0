import React from "react";
import Quest from "./Components/Quest";
import Item from "./interfaces/Item";
import Information from "./Components/Information";
import Action from "./Components/Action";
import QuestType from "./interfaces/QuestType";
import QuestGenerator from "./libraries/QuestGenerator";
import Player from "./interfaces/Player";
import Location from "./interfaces/Location";
import "./App.css";

const LOCATIONS: Location[] = [
  {
    name: 'the park',
    image: '/assets/park.jpg'
  },
  {
    name: 'the mall',
    image: '/assets/mall.jpg'
  },
  {
    name: 'the streets',
    image: '/assets/streets.jpg'
  },
  {
    name: 'the school',
    image: '/assets/school.jpg'
  },
]

QuestGenerator.setLocations(LOCATIONS)
function App() {
  const [quests, setQuests] = React.useState<QuestType[]>(
    QuestGenerator.getMany(10, 5)
  );
  const Item1: Item = {
    name: "car",
    factor: "time",
    effect: 30,
    lore: "Invented for the ease of transporation. Gets you from place to place in a short amount of time",
    image: "",
  };
  const player1: Player = {
    id: "player1",
    name: "user1",
    exp: 50,
    energy: 40,
    items: [Item1],
  };

  return (
    <div className="app">
      <div className="left-panel">
        <div>
          <Quest quests={quests} />
        </div>
        <div>
          <Information player={player1} />
        </div>
      </div>
      <div className="actionComponent">
        <Action />
      </div>
    </div>
  );
}

export default App;
