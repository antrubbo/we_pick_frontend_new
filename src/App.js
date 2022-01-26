import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login';
import Signup from './pages/Signup';
import SearchResults from './pages/SearchResults';
import Show from './pages/Show';
// import Account from './pages/Account';

const API = process.env.REACT_APP_API_URL

function App() {
  const [foundMovies, setFoundMovies] = useState([])
  const [ showMovie, setShowMovie ] = useState({})

  useEffect(() => {
    fetch(`${API}/movies/search`)
    .then(r => r.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      <Navbar setFoundMovies={setFoundMovies}/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/search-results" element={<SearchResults foundMovies={foundMovies} setShowMovie={setShowMovie}/>}></Route>
          <Route path="/movie/:id" element={<Show showMovie={showMovie}/>}></Route>
          {/* <Route path="/account/:userId/list/:listId">
            <Account />
          </Route> */}
        </Routes>
    </div>
  );
}

export default App;
