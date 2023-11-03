import { useState } from "react";

function ConditonalRendering3 (){
    const[userlogin,setuserlogin]= useState(false)

    return(
        <div>
              {userlogin || <h1>hiii</h1>}
        </div>
    )
}

export default ConditonalRendering3 ;