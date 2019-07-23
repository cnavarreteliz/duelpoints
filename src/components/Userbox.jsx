import React from "react";

import "./Userbox.scss";

class Userbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player_name: this.props.playernameFromParent,
      player_lifepoints: this.props.lifepointsFromParent,
      points: ""
    };
  }

  render() {
    return (
      <div className="userbox-wrapper">
        <div className="box user-box">
          <div className="profile">
            <img
              src={`./${this.props.character}.jpg`}
              alt="usr-img"
              className="user-img"
            />
            <div className="profile-text">
              <h2 className="subtitle user-name">{this.state.player_name}</h2>
              <h1 className="subtitle user-lifepoints">
                LifePoints: {this.props.lifepointsFromParent}
              </h1>
            </div>
          </div>

          <div className="lifepoints">
            <progress
              className={
                this.props.lifepointsFromParent > 4000
                  ? "progress is-primary"
                  : this.props.lifepointsFromParent > 2000
                  ? "progress is-warning"
                  : this.props.lifepointsFromParent >= 0
                  ? "progress is-danger"
                  : "progress"
              }
              value={this.props.lifepointsFromParent}
              max="8000"
            />
          </div>

          <div className="interaction">
            <button
              className="button is-success operation"
              onClick={() => this.props.updatePoints(this.props.lifepointsFromParent +
                this.props.pointsFromParent * 1)}
            >
              +
            </button>
            <button
              className="button is-danger operation"
              onClick={() => this.props.updatePoints(this.props.lifepointsFromParent -
                this.props.pointsFromParent * 1)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Userbox;
