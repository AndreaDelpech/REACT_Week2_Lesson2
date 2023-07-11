import React from "react";

export default function Weather(props) {
  function fahrTemp() {
    let roundTemp = (props.temperature * 9) / 5 + 32;
    return Math.round(roundTemp);
  }
  return (
    <div>
      The temperature in {props.city} is {props.temperature}°C and {fahrTemp()}
      °F
    </div>
  );
}
