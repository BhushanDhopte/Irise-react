import { useEffect,useState } from "react";

function Useeffect2(){
    const[counter,setcounter]=useState(0);

    function Increament(){
        setcounter((prevValue)=>prevValue+1)
    }

    useEffect(()=>{
        console.log("hi from useeffect2")
    },[])

    return(
        <div>
            <h1>counter: {counter}</h1>
            <button onClick={Increament}>+</button>
        </div>
    )

}

export default Useeffect2;