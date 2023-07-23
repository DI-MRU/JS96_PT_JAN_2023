import { useState } from "react";

export default function CarsFn() {
  const [carColor, setCarColor] = useState("red");
  const [vehicle, setVehicle] = useState("bicycle");
  //   const [cost, setCost] = useState(100); // Not necessarily a string

  const changeColor = () => {
    if (carColor === "red") setCarColor("blue");
    else setCarColor("red");
  };

  return (
    <div>
      <h1>
        My function {vehicle} is{" "}
        <span style={carColor === "red" ? { color: "red" } : { color: "blue" }}>
          {carColor}
        </span>
      </h1>
      <button type="button" onClick={changeColor}>
        {" "}
        Change color
      </button>
    </div>
  );
}
