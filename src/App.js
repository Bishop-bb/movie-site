
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ExplorePage from './pages/ExplorePage';
import './App.css';
import Navigation from './components/include/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

function App() {
  return (
    <BrowserRouter>
      <>
        <Navigation/>
        <Routes>
          <Route path= "/" element={<Home/>} />
          <Route path= "/ExplorePage" element={<ExplorePage/>} />
        </Routes>
      
      </>
    </BrowserRouter>
  );
}

export default App;
