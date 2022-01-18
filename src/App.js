import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
    </div>
  );
}

export default App;
