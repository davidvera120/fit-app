
import { DivCard2, DivPadre } from '../styles/Styles1';
import {Link} from 'react-router-dom'
import React from 'react'

export const Home = () => {
  return (
    <Link to="/login"><DivPadre>
    <DivCard2>
        <img src="https://i.ibb.co/nDWVjvS/Logo.png" alt="Logo" border="0" />
    </DivCard2>
    <span>Buffalo</span>
   </DivPadre></Link>
  )
}



