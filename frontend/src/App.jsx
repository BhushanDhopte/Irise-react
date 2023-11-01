
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import UseState from './Components/UseState';
import Useeffect1 from './Components/30.-10/Useeffect1';
import Useeffect2 from './Components/30.-10/Useeffect2';
import Useeffect3 from './Components/30.-10/useeffect3';
import Useeffect4 from './Components/01-11/Useeffect4';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/use-state'element={<UseState />} />
        <Route path='/use-effect-1'element={<Useeffect1 />}/>
        <Route path='/use-effect-2'element={<Useeffect2 />}/>
        <Route path='/use-effect-3'element={<Useeffect3 />}/>
        <Route path='/use-effect-4'element={<Useeffect4 />} />
      </Routes>
    </div>
  );
}

export default App;
