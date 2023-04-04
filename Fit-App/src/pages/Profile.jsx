import React from 'react'
import ButtonNavBar from '../components/navbars/ButtonNavBar';
import NavBar from '../components/navbars/NavBar';
import FormProfile from '../components/profile/FormProfile';

import { useSelector, useDispatch } from 'react-redux';
import './pages.css';
import {Badge, Card, Navbar, Nav, Table, Container, Row, Col, OverlayTrigger, Tooltip} from "react-bootstrap";


export const Profile = () => {


  return (
    <div className="profile">
   
    <NavBar />

    <FormProfile />

   

    <ButtonNavBar/>
   </div>
  
  )
}

export default Profile