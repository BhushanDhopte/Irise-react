import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import UseState from './Components/UseState';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/use-state'element={<UseState />} />
      </Routes>
    </div>
  );
}

export default App;
