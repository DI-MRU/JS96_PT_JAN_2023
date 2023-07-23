import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      vehicle: "car",
    };
  }

  //we change the value of the attribute
  changeColor = () => {
    if (this.state.color === "red") this.setState({ color: "blue" });
    else this.setState({ color: "red" });
  };

  render() {
    return (
      <div>
        <h1>
          My {this.state.vehicle} is{" "}
          <span
            style={
              this.state.color === "red" ? { color: "red" } : { color: "blue" }
            }
          >
            {this.state.color}
          </span>
        </h1>

        {/* button calls the changeColor method */}
        <button type="button" onClick={this.changeColor}>
          {" "}
          Change color
        </button>
      </div>
    );
  }
}

export default Car;
