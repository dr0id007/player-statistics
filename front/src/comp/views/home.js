import React, { Component } from "react";
import Apex from "./game/apex";
import Csgo from "./game/csgo";
import Division2 from "./game/division2";

export default class home extends Component {
  state = {
    game: "apex",
    select: false
  };

  optionClick = e => {
    this.setState({
      game: e.target.id
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.game);
    this.setState({
      select: true
    });
  };

  render() {
    if (this.state.select === true) {
      switch (this.state.game) {
        case "apex":
          return <Apex />;
        case "csgo":
          return <Csgo />;
        case "division-2":
          return <Division2 />;
        default:
          return <div> "wrong choice.." </div>;
      }
    }

    return (
      <div className="home pt-5">
        <div className="container game-form p-5">
          <form className="form" onSubmit={this.onSubmit}>
            <h2>
              <label htmlFor="game">Select game:</label>
            </h2>
            <div className="form-group">
              <select className="input form-control" id="platform">
                <option id="apex" onClick={this.optionClick}>
                  Apex
                </option>
                <option id="csgo" onClick={this.optionClick}>
                  CS:GO
                </option>
                <option id="division-2" onClick={this.optionClick}>
                  Division 2
                </option>
              </select>
            </div>
            <button className="btn" type="submit">
              Next
            </button>
          </form>
        </div>
      </div>
    );
  }
}
