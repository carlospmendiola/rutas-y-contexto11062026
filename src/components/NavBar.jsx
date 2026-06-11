import React from 'react'
import { Link, NavLink } from 'react-router'

export const NavBar = () => {
  
  return (
    <nav>
      <ul className='flexContanier'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? 'menuActivo fw600' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/servicios'
          className={({ isActive }) => isActive ? 'menuActivo fw600': ''}>
            Servicios
          </NavLink></li>
        <li>
          <NavLink to='/productos'
          className={( {isActive} ) => isActive ? 'menuActivo fw600': ''}>
            Productos
          </NavLink></li>
        <li>
          <NavLink to='/login'
          className={({isActive}) => isActive ? 'menuActivo fw600': ''}>
            Login
          </NavLink></li>
      </ul>
    </nav>
  )
}
