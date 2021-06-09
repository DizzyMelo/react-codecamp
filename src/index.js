import React, { useState } from "react";
import ReactDom from "react-dom";
import "./index.css";

const Greeting = (props) => {
  const [counter, setCounter] = useState(0);

  const [name, setName] = useState("[Enter your name]");

  const clickButton = () => {
    setCounter(counter + 1);
  };

  const editname = (e) => {
    setName(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="center">
        <h4>
          This is <strong>{name}</strong> and this is my 3534456456 first
          component
        </h4>
        <input type="text" onKeyUp={(e) => editname(e)} />
        <h4>{counter}</h4>
        <button onClick={clickButton}>Click the Button</button>
      </div>
    </React.Fragment>
  );
};

ReactDom.render(<Greeting />, document.getElementById("root"));
