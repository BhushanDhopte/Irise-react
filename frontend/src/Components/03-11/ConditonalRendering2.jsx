import { useState } from "react";

function ConditonalRendering2(){
    const[userlogin,setuserlogin]=useState(true)

    return(
        <div>
              {userlogin && <h1>User is login</h1>}
        </div>
    )

}
export default ConditonalRendering2;