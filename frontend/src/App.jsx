
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';


import UseState from './Components/UseState';
import Useeffect1 from './Components/30.-10/Useeffect1';
import Useeffect2 from './Components/30.-10/Useeffect2';
import Useeffect3 from './Components/30.-10/useeffect3';
import Useeffect4 from './Components/01-11/Useeffect4';
import PropsDrilling from './Components/02-11/PropsDrilling';
import { useState } from 'react';
import Mapping from './Components/02-11/Mapping';
import ConditonalRendering from './Components/03-11/ConditonalRendering';
import ConditonalRendering2 from './Components/03-11/ConditonalRendering2';
import ConditonalRendering3 from './Components/03-11/conditionalRendering3';
import Register from './Components/07-11/register';

function App() {
  const[counter,setcounter]=useState(0)

  function Increament(){
    setcounter((X)=>X+1)
  }
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register'element={<Register />}/>
        <Route path='/use-state'element={<UseState />} />
        <Route path='/use-effect-1'element={<Useeffect1 />}/>
        <Route path='/use-effect-2'element={<Useeffect2 />}/>
        <Route path='/use-effect-3'element={<Useeffect3 />}/>
        <Route path='/use-effect-4'element={<Useeffect4 />} />
        <Route path='/PropsDrilling'element={<PropsDrilling counter={counter} Increament={Increament} />} />
        <Route path='/mapping' element={<Mapping />}/>
        <Route path='/conditional-rendering'element={<ConditonalRendering />}/>
        <Route path='/conditional-rendering-2'element={<ConditonalRendering2 />}/>
        <Route path='/conditional-rendering-3'element={<ConditonalRendering3 />}/>
      </Routes>
    </div>
  );
}

export default App;
