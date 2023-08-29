import { useReducer, Fragment } from "react";

const setPattern = (state, action) => {
  if (action.type === "off") {
    return {
      lightOn: false,
      boiled: false,
      open: false,
      cleanUp: false
    };
  } else if (action.type === "on") {
    return {
      lightOn: true,
      boiled: true,
      open: true,
      cleanUp: true
    };
  }
  return state;
};
const initialPattern = {
  lightOn: true,
  boiled: true,
  open: true,
  cleanUp: true
  //...so on
};

const Reducer = () => {
  const [switchPatterns, dispatch] = useReducer(setPattern, initialPattern);
  const onClickHander = () => {
    dispatch({ type: "on" });
  };
  const offClickHander = () => {
    dispatch({ type: "off" });
  };
  return (
    <Fragment>
      <ul>
        <li className="red" onClick={onClickHander}>
          Click-On
        </li>
        <li className="blue" onClick={offClickHander}>
          Click-Off
        </li>
      </ul>
      <div>The Light is {switchPatterns.lightOn ? "On" : "Off"}</div>
      <div>The Water is {switchPatterns.boiled ? "Boiled" : "Cold"}</div>
      <div>The Store is {switchPatterns.open ? "Open" : "Close"}</div>
      <div>The Room is {switchPatterns.cleanUp ? "Cleaned up" : "A mess"}</div>
    </Fragment>
  );
};
export default Reducer;
