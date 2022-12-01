/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

        </p>

      </header>
    </div>
  );
}

export default App;

 */

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Nbaplayer from './pages/nbaplayer';
import Nbasalary from './pages/nbasalary';
import Nbacoach from './pages/nbacoach';
import Nbachamp from './pages/nbachamp';
//import Blogs from './pages/blogs';
//import SignUp from './pages/signup';

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/nbaplayer' element={<Nbaplayer/>} />
                <Route path='/nbasalary' element={<Nbasalary/>} />
                <Route path='/nbacoach' element={<Nbacoach/>} />
                <Route path='/nbachamp' element={<Nbachamp/>} />
            </Routes>
        </Router>
    );
}

export default App;
