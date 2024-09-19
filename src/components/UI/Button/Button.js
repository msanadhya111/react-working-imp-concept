import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("Button Running");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);

/*
React.memo will not work with Button component as the props is a function which is not the primitive
datatype as with datatype other than primitive one equality does not works in javascript
We have a trick to make it work for the non-primitive data type as by using useCallback 
check in App.js component.
useCallback has a dependency one which is very important as with useCallback if we used any variable
which is coming from outside, it's value will not be changed as it freezes it bit we can paas it
through dependency array as it is like called it when it changes
*/
