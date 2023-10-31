import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import UseState from './Components/UseState';
import Useeffect1 from './Components/30.-10/Useeffect1';
import Useeffect2 from './Components/30.-10/Useeffect2';
import Useeffect3 from './Components/30.-10/useeffect3';

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
      </Routes>
    </div>
  );
}

export default App;
