import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login';
import Signup from './pages/Signup';
import SearchResults from './pages/SearchResults';
import Show from './pages/Show';
// import Account from './pages/Account';

function App() {
  const [foundMovies, setFoundMovies] = useState([])
  const [ showMovie, setShowMovie ] = useState({})
  console.log(showMovie)

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
