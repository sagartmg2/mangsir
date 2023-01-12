
import { useState } from "react";
import SmallButton, { BigButton } from "./Button";

function Counter() {

    let initalvalue = 100

    const [number, setNumber] = useState(initalvalue) // return [ 100, function () =>{ mutator funciton  } ]

    let count = 10;
    function increment() {
        console.log("increment");
        count = count + 1;
        console.log({ count })
    }

    function incrementNumber() {
        // setNumber(number + 1)
        // setNumber(number + 1)
        setNumber((prev) => { return prev + 1 })
        setNumber((prev) => { return prev + 1 })
    }

    console.log("render")
    return <>
        {/* <SmallButton />
        <BigButton /> */}
        <h1>count: {count} </h1>
        <h1>number: {number} </h1>
        <button onClick={increment()}>increment</button>
        <button onClick={incrementNumber}>incrementState</button>
        {/* <button onClick={incrementNumber()}>incrementState</button> */}
        {/* <button onClick={() => { console.log("increment"); }}>increment</button> */}
        {/* <button onClick="increment()" >increment</button>  // in plain html  */}
    </>
}

export default Counter;