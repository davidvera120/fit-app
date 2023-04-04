
import { useNavigate } from 'react-router';
import {listaEjercicios} from '../../Redux/Actions/readAction1';
import { useSelector, useDispatch } from 'react-redux';
import React, {useState, useEffect} from 'react';
import {TextIntro2, Container1, Container2, Buttonfilter, ButtonHome, ButtonLink, ButtonIntro2} from "../../styles/PagIntro"
import './routines.css';
import {Badge, Button, Card, Navbar, Nav, Table, Container, Row, Col, Form, OverlayTrigger, Tooltip} from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

const Filtro2 = (props) => {

const {Workouts} = useSelector(state => state.read2)
const dispatch = useDispatch();
const [filtrado, setfiltrado]= useState([])

const filtrar= async (cat) => {
  const Workouts1= Workouts.filter(elemento => elemento.categoria === cat);
  setfiltrado(Workouts1)
}

useEffect(() => {
    setfiltrado(Workouts);        
},[Workouts])

useEffect(() => {
        dispatch(listaEjercicios())        
},[dispatch])

  return (

    <Container fluid>
    <Row>

    <Col md="12" className="routines-filter mt-4">
    <Buttonfilter onClick={()=>{filtrar("body")}}>All body</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("abs")}}>Abs</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("arms")}}>Arms</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("chest")}}>Chest</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("back")}}>Back</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("legs")}}>Legs</Buttonfilter>
    </Col>

    <Col md="12" className="routines-filter2 mt-4 mb-5">
   
    {
        filtrado?.map((elemento) => {
          return (
    <Container1 key={uuidv4()}>
    
    <img src={elemento.img}  Style="height:100%; width:100%;objet-fit:cover" alt="cover"/>
    
    <Container2>
    <div className="col-9">
    <p Style="font-size:16px; background:none; color:#252525; margin-left:10px">{elemento.name}</p>
    </div>
    <div className="col-3">
    <p Style="font-size: 13px; background:none; color:#252525">{elemento.duracion}</p>
    </div>
    </Container2>
    
    </Container1>
    )})            
}
     
    </Col>
    </Row>
    </Container>
  )
}

export default Filtro2
