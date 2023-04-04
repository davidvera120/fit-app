import React from 'react'
import {Link} from 'react-router-dom'

export const ButtonNavBar = () => {
  return (
    <div className="col-12 fixed-bottom button-nav" >
    <nav className="navbar-custom">
        <ul className="navbar-nav-custom mt-2">
            <li className="nav-item">
            <Link to="/home1" className="navlink"> <i className='bx bx-home-alt icons-nav'></i></Link>
            </li>
            <li className="nav-item">
            <Link to="/Profile" className="navlink"><i className='bx bx-user icons-nav'></i></Link>
            </li>
            <li className="nav-item">
            <Link to="/new" className="navlink"><i className='bx bx-dumbbell icons-nav2'></i><h6 className="workouts">WORKOUTS</h6></Link> 
            </li>
            <li className="nav-item">
            <Link to="/prueba" className="navlink"><i className='bx bxs-book icons-nav'></i></Link> 
            </li>
        </ul>
    </nav>
   
</div>
  )
}
export default ButtonNavBar;
