import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import IronManGiphy from './container/ironmanGiphy';
import SearchGiphy from './container/searchGiphy';
import logo from '../src/assets/logo.png'
import './App.css'

const App = () => {
  return (
      <div className='app__welcome'>
        <h1>Welcome to Your Giphy</h1>
        <img src={logo} alt='logo' />
        <nav>
          <ul>
            <li>
              <Link to="/ironMan">IRON MAN GIPHY</Link>
            </li>
            <li>
              <Link to="/search">SEARCH YOUR GIPHY</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/ironMan" element={<IronManGiphy />} />
          <Route path="/search" element={<SearchGiphy />} />
        </Routes>
      </div>
  );
};

export default App;

