import React from "react";
import ReactDice from "react-dice-complete";
import "../../node_modules/react-dice-complete/dist/react-dice-complete.css";

class Dice extends React.Component {
  rollAll() {
    this.reactDice.rollAll();
  }

  rollDoneCallback(num) {
    console.log(`You rolled a ${num}`);
  }

  render() {
    return (
      <div>
        <ReactDice
          numDice={1}
          rollDone={this.rollDoneCallback}
          outline={true}
          ref={dice => (this.reactDice = dice)}
          dotColor={"#000"}
          faceColor={"#fff"}
          rollTime={0.5}
        />
      </div>
    );
  }
}
export default Dice;
