import React from "react";
import "./Duelpoints.scss";
import Timer from "react-compound-timer";

import Userbox from "../../components/Userbox";
import Playername from "../../components/Playername";
import Coin from "../../components/Coin";
import Dice from "../../components/Dice";

class Duelpoints extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1_name: "",
      player1_lifepoints: 8000,
      player2_name: "",
      player2_lifepoints: 8000,
      points: "",
      reset: false
    };

    this.resetGame = this.resetGame.bind(this);
  }

  resetGame = () => {
    this.setState({
      points: "",
      player1_lifepoints: 8000,
      player2_lifepoints: 8000,
      reset: true
    });
  };

  render() {
    const {
      player1_name,
      player1_lifepoints,
      player2_name,
      player2_lifepoints,
      points
    } = this.state;

    return (
      <div className="duelpoints-wrapper">
        <div className="webpage-header">
          <a href="/" className="navbar-brand webpage-name">
            DuelPoints.xyz
          </a>
        </div>

        <section className="userbox">
          <div className="container">
            <div className="columns">
              {player1_name === "" && (
                <div className="column player1">
                  <Playername
                    sendPlayername={name =>
                      this.setState({ player1_name: name })
                    }
                  />
                </div>
              )}

              {player1_name !== "" && (
                <div className="column player-1">
                  <Userbox
                    character={"yugi"}
                    playernameFromParent={player1_name}
                    lifepointsFromParent={player1_lifepoints}
                    pointsFromParent={points}
                    resetGame={this.resetGame}
                    updatePoints={points =>
                      this.setState({ player1_lifepoints: points, points: "" })
                    }
                  />
                </div>
              )}

              {player2_name === "" && (
                <div className="column player2">
                  <Playername
                    sendPlayername={name =>
                      this.setState({ player2_name: name })
                    }
                  />
                </div>
              )}

              {player2_name !== "" && (
                <div className="column player-2">
                  <Userbox
                    character={"kaiba"}
                    playernameFromParent={player2_name}
                    lifepointsFromParent={player2_lifepoints}
                    pointsFromParent={points}
                    updatePoints={points =>
                      this.setState({ player2_lifepoints: points, points: "" })
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="game">
          {player1_name !== "" && player2_name !== "" && (
            <div className="container">
              <div className="box game-box">
                <div className="columns game-structure">
                  <div className="column game-points">
                    <div className="points">
                      <h1 className="game-points-title"> POINTS </h1>
                      <input
                        className="input game-points-input"
                        type="number"
                        value={points}
                        onChange={event =>
                          this.setState({ points: event.target.value })
                        }
                      />
                    </div>
                    <div className="buttons add-points">
                      <button className="button" onClick={points + 100}>+100</button>
                      <button className="button">+500</button>
                      <button className="button">+1000</button>
                      <button className="button">+5000</button>
                    </div>
                  </div>
                  <div className="column game-extras">
                    <div className="game-dice">
                      <h2 className="game-dice-title"> DICE </h2>
                      <div className="game-dice-dice">
                        <Dice />
                      </div>
                    </div>
                    <div className="game-coin">
                      <h2 className="game-coin-title"> COIN </h2>
                      <div className="game-coin-coin">
                        <Coin />
                      </div>
                    </div>
                    <div className="game-time">
                      <h2 className="game-time-title"> TIME </h2>
                      <Timer
                        formatValue={value =>
                          `${value < 10 ? `0${value}` : value}`
                        }
                        onReset={this.resetGame}
                      >
                        {({ reset }) => (
                          <React.Fragment>
                            <div className="game-time-timer">
                              <Timer.Minutes />:
                              <Timer.Seconds />
                            </div>
                            <button
                              className="button game-reset-button"
                              onClick={reset}
                            >
                              <h2 className="game-reset-button-title">Reset</h2>
                            </button>
                          </React.Fragment>
                        )}
                      </Timer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <footer className="footer">
          <h2 className="footer-text">
            DuelPoints - Todos los derechos reservados
          </h2>
        </footer>
      </div>
    );
  }
}

export default Duelpoints;
