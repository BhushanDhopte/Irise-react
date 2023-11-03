import { useState } from "react";


function Mapping(){
    const [players,setplayers]= useState([{name:"Virat",age:35,role:"Bastmen"},{name:"Rohit",age:34,role:"Bastmen&Captain"},{name:"Rahul",age:35,role:"Bastmen&vice-captain"},{name:"Jadeja",age:35,role:"allrounder"}])
     console.log(players,"players")
    return(
        <div>
       {players.map((i)=>(
                <div>
                  <h1>Name:{i.name}</h1>
                  <h2>Age:{i.age}</h2>
                  <h2>role:{i.role}</h2>
                </div>
            ))}
   </div>
    )
}

export default Mapping;