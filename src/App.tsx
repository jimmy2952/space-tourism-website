import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { NavBar } from './Navigation/Nav-bar';
import { HomePage } from './pages/Home/Home';


function App() {
  const routes = (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Navigate to='/' />
    </Routes>
  )
  return (
      <BrowserRouter>
        <NavBar />
        <HomePage />
        {/* <Routes>
          <Route path='/' element={<NavBar />} />
          <Navigate to='/' />
        </Routes> */}
      </BrowserRouter>
  );
}

export default App;
