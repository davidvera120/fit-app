import React from 'react'
import {TextIntro2, Container1, Container2, Buttonfilter, ButtonHome, ButtonLink, ButtonIntro2} from "../styles/PagIntro"
import {Link} from 'react-router-dom'

export const Buttons = () => {
  return (
    
    <div className="col-12" Style="margin-top:20px">
<div className="container d-flex" Style="justify-content: center;align-items:center; gap:20px;">
<ButtonHome>
  <span></span>
  <span></span>
  <span></span>
  <span></span> DISCOVER
</ButtonHome>

  <Link to='/workouts' Style="background:none"> 
  <ButtonHome>
  <span></span>
  <span></span>
  <span></span>
  <span></span>WORKOUTS
  </ButtonHome>
  </Link>
</div>
</div>
   
  )
}

export default Buttons