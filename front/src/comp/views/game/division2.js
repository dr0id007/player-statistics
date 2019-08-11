import React, { Component } from "react";
import { fetch } from "../../api/fetch";
import Player from "../player";

export default class home extends Component {
  state = {
    platform: "origin",
    id: "",
    result: [],
    player: false
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  optionClick = e => {
    this.setState({
      platform: e.target.id
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const result = await fetch("apex", this.state.platform, this.state.id);
    await console.log("result:-", result.data);
    this.setState({
      result: result.data,
      player: true
    });
  };

  render() {
    if (this.state.player === true) {
      return <Player data={this.state.result.data} />;
    }
    return (
      <div className="division-2 pt-5">
        <div className="container game-form p-5">
          <h2 className="mb-5 mt-0">Division 2</h2>
          <form className="form" onSubmit={this.onSubmit}>
            <label htmlFor="platform">Select platform:</label>
            <div className="form-group">
              <select className="input form-control" id="platform">
                <option id="uplay" onClick={this.optionClick}>
                  Uplay
                </option>
                <option id="psn" onClick={this.optionClick}>
                  Playstation
                </option>
                <option id="xbl" onClick={this.optionClick}>
                  Xbox
                </option>
              </select>
            </div>
            <label htmlFor="id">User Id:</label>
            <br />
            <input
              className="form-control input w-100"
              placeholder="GamerTag"
              name="id"
              id="id"
              onChange={this.onChange}
            />
            <br />
            <br />
            <button className="btn btn-outline w-100" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
