import React from 'react'
import { Link, NavLink } from 'react-router'

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink><Link to='/'>Home</Link></NavLink></li>
        <li><NavLink><Link to='/servicios'>Servicios</Link></NavLink></li>
        <li><NavLink><Link to='/productos'>Productos</Link></NavLink></li>
        <li><NavLink><Link to='/login'>Login</Link></NavLink></li>
      </ul>
    </nav>
  )
}
