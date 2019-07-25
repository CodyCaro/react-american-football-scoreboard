//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import AddScoreButtons from "./AddScoreButtons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [homeScore, setHomeScore] = useState(0);
  let [awayScore, setAwayScore] = useState(0);

  function handleAddScore(teamName, scoreToAdd) {
    if (teamName === "home") {
      setHomeScore((homeScore += scoreToAdd));
    } else if (teamName === "away") {
      setAwayScore((awayScore += scoreToAdd));
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeTeamScore={homeScore} awayTeamScore={awayScore} />
        <BottomRow />
      </section>
      <AddScoreButtons addScore={handleAddScore} />
    </div>
  );
}

export default App;
