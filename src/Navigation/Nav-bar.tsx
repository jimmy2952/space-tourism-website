import React from 'react';
import './Nav-bar.scss';
import { NavCircle } from './Nav-circle';
import { NavLine } from './Nav-line';
import { NavRectangle } from './Nav-rectangle';

export const NavBar = () => {
  return (
    <header>
      <NavCircle></NavCircle>
      <NavLine></NavLine>
      <NavRectangle></NavRectangle>
    </header>
  );
}
