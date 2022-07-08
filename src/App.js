import React, { useState } from 'react';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");
  const [warningMessage, setWarningMessage] = useState(null);

  const updateTemperature = (val) => {
    const newTemperatureColor = temperatureValue + val;
    if(newTemperatureColor > 30) {
      setWarningMessage("The temperature is too high!");
    }
    else if(newTemperatureColor < 0) {
      setWarningMessage("The temperature is too low!");
    }
    else {
      setWarningMessage(null);
      setTemperatureValue(newTemperatureColor);
      setTemperatureColor(newTemperatureColor >= 15 ? "hot" : "cold");
    }
  };
  
  return (
    <div className='app-container'>
      <div className={`${warningMessage === null ? "hide" : ""}`}>
        {warningMessage}
      </div>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className='button-container'>
          <button onClick={() => updateTemperature(1)}>+</button>
          <button onClick={() => updateTemperature(-1)}>-</button>
        </div>
    </div>
  );
}

export default App;