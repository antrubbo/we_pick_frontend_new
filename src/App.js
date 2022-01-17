import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login';
// import { useEffect } from 'react';
// const API = process.env.REACT_APP_API_URL

function App() {

  // useEffect(() => {
  //   fetch(API + "/movies")
  //   .then(r => r.json())
  //   .then(movies => console.log(movies))
  // }, [])

  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route exact path="/" element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;
