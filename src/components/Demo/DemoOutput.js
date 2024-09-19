import React from "react";

const DemoOutput = (props) => {
    console.log('Demo Output Running');
    const showText = props.showFlag;
    return (
        <p>{showText ? 'This is new!' : ''}</p>
    )
}

export default React.memo(DemoOutput);

/*
We have something called React.memo which basically checks if the props that we are getting
is the same as before if yes then we do not re-evaluate the component.

******* Why not we can keep it in all the components *******
Because it itself comes with it's expenses as for comparing the props we need to store before props
of it So *************** if expenses of re-evaluation > storing the before props **************
then we should go ahead with this approach.

So if we know anyhow there will be a difference in the props from parent component then we 
should not have it otherwise adding the expense which is not required.
*/