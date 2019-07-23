import React from "react";

import "./Playername.scss";

class Playername extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  _handleKeyDown(evt, variable) {
    if (evt.key === "Enter") {
      console.log("Hola");
      this.props.sendPlayername(this.state.name);
    }
  }

  render() {
    return (
      <div className="playername-wrapper">
        <div className="container">
          <div className="box user-box">
            <div className="user-title">
              <h1 className="player">Insert Player's Name</h1>
            </div>
            <div className="user-insert">
              <input
                className="input insert-input"
                type="text"
                placeholder="Name"
                onChange={event => this.setState({ name: event.target.value })}
                onKeyDown={event => this._handleKeyDown(event, "name")}
              />
              <button
                className="button is-small insert-button"
                onClick={() => this.props.sendPlayername(this.state.name)}
              >
                Insert
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Playername;
