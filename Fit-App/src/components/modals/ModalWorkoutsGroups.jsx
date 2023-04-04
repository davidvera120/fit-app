
import {Link, NavLink} from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import { useAuth } from "../../context/AuthContext";
import NavBar from '../navbars/NavBar';
import { ButtonIntro1, Container1} from '../../styles/PagIntro'
import  ButtonNavBar  from '../navbars/ButtonNavBar';
import {collection, getDocs, getDoc, deleteDoc, connectFirestoreEmulator, doc} from 'firebase/firestore'; 
import {db, auth} from '../../firebase';
import { ClassNames } from '@emotion/react';
import '../homeRoutines/routines.css';
import {listaGroups} from '../../Redux/Actions/readAction1';
import { useSelector, useDispatch } from 'react-redux';
import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import ReactPlayer from "react-player";
import { useParams } from 'react-router-dom';
import {listaRoutines} from '../../Redux/Actions/readAction1';
import {BiChevronRight} from "react-icons/bi"
import {Badge, Card, Navbar, Nav, Table, Container, Row, Col, Form, OverlayTrigger, Tooltip} from "react-bootstrap";
import {AiOutlineCloseCircle} from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';

export const ModalWorkoutsGroups = () => {

    const {id}=useParams();
    console.log(id)
    const {WorkoutsG} = useSelector(state => state.read3)
    const {Routines} = useSelector(state => state.read1)
    const [filtrado, setFiltrado]=useState([])
    const dispatch = useDispatch();
    const [name, setName]=useState('')
   



    const filtro = async () => {

      const filtrado1 = Routines.filter((elemento) =>{
        return elemento.id===id; 
    });
    const filtrado2=filtrado1[0];
        setName(filtrado2.name)
       
      console.log(name)
    }
    // const funcionModal = (valor, id2) => {


    //     const filtrado1 = WorkoutsG.filter((elemento) =>{
        
    //         return elemento.id===id2 
    //     });

    //     setFiltrado(filtrado1)
    //     setabierto(valor)
        
    //     }
    // const id="EamhrupOgfftMyLCnIUZ";

    // eslint-disable-next-line react-hooks/exhaustive-deps
//     const listaG = async() => {

//         const filtrado1 = Routines.filter((elemento) =>{
//             return elemento.id===id; 
//         });
//         const filtrado2=filtrado1[0];
// setFiltrado(filtrado2);
//     }
const [abierto, setabierto]= useState(false);
const [videoRoutine, setVideoRoutine]= useState("");
const [nameRoutine, setNameRoutine]= useState("")

const funcionModal = (valor, video, name) => {
    setabierto(valor);
    setVideoRoutine(video);
    setNameRoutine(name);
}

useEffect(() => {
  dispatch(listaRoutines()) 
},[dispatch])


useEffect(() => {
  dispatch(listaGroups(id))
  filtro()
},[dispatch])


  return (
    <Container fluid className="background-work">
    <Row>

<NavBar/>


<Col md="12">
<div className="routes-work">
<NavLink to="/workouts" className="current">Workouts</NavLink><BiChevronRight size={25} style={{ color:'#fff' }}/><NavLink to="/workg/:id" className="current2">{name}</NavLink> 
</div>
</Col>


<div className="workouts-list mt-3">

{
  WorkoutsG?.map((elemento)=>{
    return(
     
      <div className="custom-btn2 btn-2" key={uuidv4()}>
      <button className="button-close"    onClick={()=>{funcionModal(true, elemento.video, elemento.name)}}>
      <div className="col-4 img-fluid">
      <img  src={elemento.img} alt="img" className="img-work"/>
      </div>
      
      <div className="col-5 workouts-items">
      <span>{elemento.name}</span>
      </div>
      
      <div className="col-3 workouts-items">
      <i className='bx bx-chevron-right-circle icon-work'></i>
      </div>
      </button>
      </div>
     
)})
}
</div>

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
<ReactPlayer className="video-modal w-100" url={videoRoutine} playing loop/>
</Col>
</Row>
</ModalBody> 
<ModalFooter>
</ModalFooter>
</Modal>


<ButtonNavBar />
</Row>
</Container>
  )
}
