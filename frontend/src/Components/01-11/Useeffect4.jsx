import { useState, useEffect } from "react";

function Useeffect4(){
    const[counter1,setcounter1]=useState(0);
    const[counter2,setcounter2]=useState(0);
    const[counter3,setcounter3]=useState(0);

    function ChangeCounter1(){

        setcounter1((x)=>x+1)
    }

    function ChangeCounter2(){
        setcounter2((x)=>x+1)
    }

    function ChangeCounter3(){
        setcounter3((x)=>x+1)
    }

    useEffect(()=>{
        console.log("hi from useEffect4")
    },[counter1,counter2,counter3])

    return(
        <div>
            <h1>UseEffect4</h1>
            <h2>counter1={counter1}</h2>
            <button onClick={ChangeCounter1}>Increament for counter1</button>
            <h2>counter2={counter2}</h2>
            <button on onClick={ChangeCounter2}>Increament for counter2</button>
            <h2>counter3={counter3}</h2>
            <button on onClick={ChangeCounter3}>Increament for counter2</button>
        </div>
    )
}

export default Useeffect4;