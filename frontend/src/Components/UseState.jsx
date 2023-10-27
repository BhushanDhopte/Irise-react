import { useState } from "react";

function UseState(){
    const [counter,setcounter]=useState(0)
    console.log(counter,"-counter")

    function Increment(){
        setcounter((preValue)=>preValue+1)
    }
    function Decrement(){
        setcounter((preValue)=>preValue-1)
    }
    function Square(){
        setcounter((preValue)=>preValue*preValue)
    }

    return(
        <div>
            <h1>Counter={counter}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Square}>Square</button>
        </div>
    )
}

export default UseState;