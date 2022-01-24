import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { NavBar } from './Navigation/Nav-bar';
import { HomePage } from './pages/Home/Home';
import { DestinationPage } from './pages/Destination/Destination';
import { CrewPage } from './pages/Crew/Crew';
import { TechnologyPage } from './pages/Technology/Technology';


function App() {
  const routes = (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Navigate to='/' />
    </Routes>
  )
  return (
      <>
        <NavBar />
        <Routes>
          <Route path='/destination' element={<DestinationPage />} />
          <Route path='/crew' element={<CrewPage />} />
          <Route path='/technology' element={<TechnologyPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
  );
}

export default App;
