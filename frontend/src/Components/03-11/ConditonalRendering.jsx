import { useState } from "react";


function ConditonalRendering(){
    const[login,setlogin]=useState(true)

    function userlogin(){
        setlogin((prevValue)=>!prevValue)
    }

    return(
       
           <div>
             {login?<button onClick={userlogin}>logout</button>:<button onClick={userlogin}>login</button>}
           </div>
      
        
       
    )
}

export default ConditonalRendering;