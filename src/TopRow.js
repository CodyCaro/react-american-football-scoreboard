import React from "react";
import "./App.css";

function TopRow(props) {
  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">Lions</h2>

        {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

        <div className="home__score">{props.homeTeamScore}</div>
      </div>
      <div className="timer">00:03</div>
      <div className="away">
        <h2 className="away__name">Tigers</h2>
        <div className="away__score">{props.awayTeamScore}</div>
      </div>
    </div>
  );
}

export default TopRow;
