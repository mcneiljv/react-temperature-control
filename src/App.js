import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    setTemperatureValue(newTemperature);

    if (newTemperature >= 15) {
      setTemperatureColor("hot");
    }

    if (newTemperature == 31) {
      setTemperatureValue(newTemperature - 1);
    }
  };

  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);

    if (newTemperature < 15) {
      setTemperatureColor("cold");
    }

    if (newTemperature == -1) {
      setTemperatureValue(newTemperature + 1);
    }
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
};

export default App;
