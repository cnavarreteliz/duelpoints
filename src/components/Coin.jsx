import React from "react";

import "./Coin.scss";

class Coin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 1,
      max: 2,
      number: 1,
      speed: 3,
      flip: false
    };
  }
  componentDidMount() {
    this.setState({
      number: this.generateNumber(this.state.min, this.state.max)
    });
  }

  generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  getInputs = () => {
    if (this.state.min > this.state.max) {
      const minTemp = this.state.min;
      const maxTemp = this.state.max;
      this.setState(
        {
          min: maxTemp,
          max: minTemp
        },
        () =>
          this.setState({
            number: this.generateNumber(this.state.min, this.state.max)
          })
      );
    } else {
      this.setState({
        number: this.generateNumber(this.state.min, this.state.max)
      });
    }
    this.setState(
      {
        flip: true
      });
      setTimeout(() => {
        this.setState({flip: false});
      }, 1200)
      
    
  };

  resetFlip = () => {
    this.setState({
      flip: false
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="coin-wrapper">
        <div className="container">
          <div className="coin-generator">
            <img
              src={
                this.state.number === 1 ? "./coin-front.png" : "./coin-back.png"
              }
              alt="Coin"
              className={`coin-toss ${
                this.state.flip ? "flip-scale-up-hor" : ""
              }`}
              onClick={this.getInputs}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Coin;
