import React, { Component } from "react";
import { fetch } from "../../api/fetch";
import Player from "../player";
import { Redirect } from "react-router-dom";

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
    await this.setState({
      result: result.data,
      player: true
    });
  };

  render() {
    if (this.state.player === true) {
      return <Player data={this.state.result.data} />;
    }
    return (
      <div className="apex pt-5">
        <div className="container mt-5 game-form p-5">
          <h2 className="mb-5 mt-0">Apex</h2>
          <form className="form" onSubmit={this.onSubmit}>
            <label htmlFor="platform">Select platform:</label>
            <div className="form-group">
              <select className="input form-control" id="platform">
                <option id="origin" onClick={this.optionClick}>
                  Origin
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
