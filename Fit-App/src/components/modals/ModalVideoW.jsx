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

export const ModalVideoW = () => {
    
    const [abierto, setabierto]= useState(false);
    const [videoRoutine, setVideoRoutine]= useState("");
    const [nameRoutine, setNameRoutine]= useState("")
    
    const funcionModal = (valor, video, name) => {
        setabierto(valor);
        setVideoRoutine(video);
        setNameRoutine(name);
    }

  return (
    <Container fluid>
    <Row>
      


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

export default ModalVideoW
