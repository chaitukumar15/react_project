import React, { useState, useEffect } from "react";
import TimerComponent from "./fun2";

function Ho() {
  const [usr, setUsr] = useState(true);

  const toggleComponent = () => {
    setUsr(prevUsr => !prevUsr);
  };

  return (
    <>
      {usr ? <TimerComponent /> : null}
      <button onClick={toggleComponent}>Toggle Timer</button>
    </>
  );
}

export default Ho;
