import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu =()=>(
  <nav>
    <ul>
      <li><NavLink to="/FilterForm" >Attraction</NavLink></li>
      <li><NavLink to="/About">About</NavLink></li>
      <li><NavLink to="/Blog">Blog</NavLink></li>
    </ul>
  </nav>
)

export default Menu;