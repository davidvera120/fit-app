import React from 'react';
import { NavBarStyled } from '../../styles/StylesGlobal';
import {Link, NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {  signOut } from "firebase/auth";
import {db, auth} from '../../firebase';
import './navbars.css'

 export const NavBar = () => {

    const logOut = () => {
   
        signOut(auth);
    window.location.reload(); 
    }

    const uid  = useSelector( state => state.login)
    const name=uid.name;
        return (
            <div className="col-12">
            <div className="fixed-top nav2">
            <nav className="navbar-custom">
                <ul className="navbar-nav-custom mt-3">
                    <li className="nav-item">
                    <h6 className="mt-1">{name}</h6>
                    </li>
                    <li className="nav-item">
                  
                    </li>
                    <li className="nav-item">
                    
                    </li>
                    <li className="nav-item">
                    <button onClick={logOut} className="button-nav1"><i className='bx bx-log-out'></i></button>
                    </li>
                </ul>
            </nav>
        </div>
        </div>

        );
    }


    export default NavBar;