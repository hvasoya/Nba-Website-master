

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Nbaplayer from './pages/nbaplayer';
import Nbasalary from './pages/nbasalary';
import Nbateam from './pages/nbateam';
import Nbachamp from './pages/nbachamp';



function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/nbaplayer' element={<Nbaplayer/>} />
                <Route path='/nbasalary' element={<Nbasalary/>} />
                <Route path='/nbateam' element={<Nbateam/>} />
                <Route path='/nbachamp' element={<Nbachamp/>} />
            </Routes>
        </Router>
    );
}

export default App;
