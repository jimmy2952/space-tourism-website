import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { NavBar } from './Navigation/Nav-bar';
import { HomePage } from './pages/Home/Home';
import { DestinationPage } from './pages/Destination/Destination';
import { CrewPage } from './pages/Crew/Crew';


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
        <CrewPage />
        {/* <DestinationPage /> */}
        {/* <Routes>
          <Route path='/' element={<NavBar />} />
          <Navigate to='/' />
        </Routes> */}
      </BrowserRouter>
  );
}

export default App;
