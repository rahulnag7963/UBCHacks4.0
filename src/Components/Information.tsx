import React from "react";
import { Line } from "rc-progress";
import "./Information.css";
import Player from "../interfaces/Player";
import Icon1 from "../Pictures/card_outline.png";
import Icon2 from "../Pictures/card_outline_remove.png";
import Icon3 from "../Pictures/card_place.png";
import Icon4 from "../Pictures/card_remove.png";
import Icon5 from "../Pictures/card_rotate.png";
import Icon6 from "../Pictures/card_subtract.png";
const Information = ({ player }: { player: Player }) => {
  const xpLvl = Math.floor(Math.pow(player.exp / 10, 1 / 3));
  return (
    <div className="information">
      <ul>
        <li>
          <h5>Username: {player.name}</h5>
          <h5>Level: {xpLvl}</h5>
        </li>
        <li>
          <h5>Experience</h5>
          <Line percent={player.exp} strokeWidth={4} strokeColor="#33d6ff" />
        </li>
        <li>
          <h5>Energy</h5>
          <Line percent={player.energy} strokeWidth={4} strokeColor="#00e600" />
          <h5>Inventory</h5>
        </li>
        <li className="items">
          <img src={Icon1} />
          <img src={Icon2} />
          <img src={Icon3} />
          <img src={Icon4} />
          <img src={Icon5} />
          <img src={Icon6} />
        </li>
      </ul>
    </div>
  );
};

export default Information;
