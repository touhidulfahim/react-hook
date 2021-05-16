import React, { useState } from 'react';



const Test = props => {
    const testState = useState("");
    //console.log(testState);
    if (testState[0] === "") {
        testState[1](5566)
    }
    return (
        <div>
            <h3>{testState[0]}</h3>
        </div>
    );
}

export default Test;