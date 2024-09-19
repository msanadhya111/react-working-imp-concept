import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log("App Running");
  const handleParagraph = useCallback(() => {
    setShowParagraph((previousParagraph) => !previousParagraph);
  }, []);
  const [listTitle, setListTitle] = useState("My List");
  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={listItems} />
      {<DemoOutput showFlag={false} />}
      <Button onClick={handleParagraph}>Show Paragraph</Button>
    </div>
  );
}

export default App;

/* 
How does react works actually

React deal with the components means state, props, context stuff, it does not have anything related to
UI interface shown to the users. 

ReactDOM is the one which actually deal with the interface shown to the user.

When there is any change in any component, React updates the component and take the diff and give to
the ReactDOM then it handles how to show it on the UI.

There is a virtual DOM concept which first check the diff and if there is any diff then it shows 
it to the real DOM.

So re-evaluation of a component is not equal to the re-rendering of the UI.

When there is a diff in a component that only it loads, but for the child component it loads even if
there is a diff in parent component.

**** When a fun is re-evaluated then the whole function loads does it mean it will initialize useState
again with every re-evaluate -> ************ NO ************
As soon as the react initialize the state once react store it for that component and when next
time it will be re-evaluated with state, props, context(it boiled down to the state change only)
it will assign the previous value unlike when it is removed from the DOM and get brought in 
again
************* Whenever we changes the state it does not change automatically it put it into the 
scheduler and it will be executed when it turns comes means if more priority works are there
then it will be on hold till that time
Suppose there are 3 state changes in 5 lines of code then what happens is for the first state update
the component will be re-evaluated but those 2 states still not changes so we can have wrong value of
state for that it is better to access the state like this setShowParagraph((previousParagraph) => !previousParagraph);
as now it is not picking with the re-evaluated UI one it is directly picking it from the state
which always has the correct value, and with useEffect it will be similar to the one we are putting
it the dependency means it will be executed only when it changes

Batching concept -> In React 17, we have the batching where we have state update in simultaneous line 
of code then it will be clubbed and with one update it will update the value of both states, but not
one of the asynchronous, setTimeout or any event listener one's. But with ****React 18 even with asynchronous, 
event listener, setTimeout one's it will update
*/
