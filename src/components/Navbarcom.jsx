import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbarcom() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-nav text-uppercase fixed-top navbar-shrink" id='mainNav'>
  <div className="container">
    <a className="navbar-brand" href="#">Start Bootstrap</a>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link " to={'/portfolio'} >Portfolio </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to={'/about'}>About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link " to={'/contact'}>Contact</Link>
          
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
