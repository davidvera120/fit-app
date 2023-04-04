import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import {listaEjercicios} from '../../Redux/Actions/readAction1';
import { useSelector, useDispatch } from 'react-redux';
import {TextIntro2, Container1, Container2, Buttonfilter, ButtonHome, ButtonLink, ButtonIntro2} from "../../styles/PagIntro";
import '../homeRoutines/routines.css';
import {Badge, Card, Navbar, Nav, Table, Container, Row, Col, Form, OverlayTrigger, Tooltip} from "react-bootstrap";
import ReactPlayer from "react-player";
import {AiOutlineCloseCircle} from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';

export const ModalVideo = () => {

const [abierto, setabierto]= useState(false);
const [videoRoutine, setVideoRoutine]= useState("");
const [nameRoutine, setNameRoutine]= useState("")

const funcionModal = (valor, video, name) => {
    setabierto(valor);
    setVideoRoutine(video);
    setNameRoutine(name);
}

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
    <button className="close"  key={uuidv4()}  onClick={()=>{funcionModal(true, elemento.video, elemento.name)}}>
    <Container1 >
    <img src={elemento.img} className="card-img" alt="cover"/>
    <Container2>
    <Col md="9">
    <p className="card-name">{elemento.name}</p>
    </Col>
    <Col md="3">
    <p className="card-time">{elemento.duracion}</p>
    </Col>
    </Container2>
    </Container1>
    </button>
    )})            
}  
</Col>

    <Modal isOpen={abierto}>
    <ModalHeader>
    <Row>
    <Col md="1">
    <button className="close" onClick={()=>{funcionModal(false)}}><AiOutlineCloseCircle  size={21} style={{ color:'black' }} /></button>
    </Col>
    <Col md="11">
    <h4 className="title-modal">{nameRoutine}</h4>
    </Col>
    </Row>
    </ModalHeader>
    <ModalBody>
    <Row>
    <Col md="12" className="routines-filter">
    <ReactPlayer className="video-modal w-100" url={videoRoutine}/>
    </Col>
    </Row>
    </ModalBody> 
    <ModalFooter>
    </ModalFooter>
    </Modal>

    </Row>
    </Container> 
  )
}

export default ModalVideo;