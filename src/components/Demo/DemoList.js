import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log("DemoList RUNNING");

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);

/*
Same like functions(we have use useCallback), for data we have something called useMemo hook, which will
memoise the data.
Suppose for the operation like sorting which will be performance efficient it is good to memoise the data
as it is performance extensive task, but it is not good to do it every other data as it itself bring some
memory stuff just like useCallback and therefore useCallback is far more useful than useMemo.
Just check the usage of same in parent fn as well.

In useMemo it will rerun the calculation again to return the latest value but in useCallback it will recreate 
the function not run that function again

*/
