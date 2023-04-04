 
import {Link, NavLink} from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import { useAuth } from "../../context/AuthContext";
import NavBar from '../navbars/NavBar';
import { ButtonIntro1, Container1} from '../../styles/PagIntro'
import  ButtonNavBar  from '../navbars/ButtonNavBar';
import {collection, getDocs, getDoc, deleteDoc, connectFirestoreEmulator, doc} from 'firebase/firestore'; 
import {db, auth} from '../../firebase';
import {BiChevronRight} from "react-icons/bi"
import { ClassNames } from '@emotion/react';
import {listaRoutines} from '../../Redux/Actions/readAction1';
import { useSelector, useDispatch } from 'react-redux';
import {Badge, Card, Navbar, Nav, Table, Container, Row, Col, Form, OverlayTrigger, Tooltip} from "react-bootstrap";
import './workouts.css';
import { v4 as uuidv4 } from 'uuid';

export const Workouts = () => {

const {id} = useSelector(state => state.login)
console.log(id)
const {Routines} = useSelector(state => state.read1)

const dispatch = useDispatch();

useEffect(() => {
  
dispatch(listaRoutines())

},[dispatch])

const deleteWorkout = async (id2) => {
  const docRef=doc(db, "users", id)
  const colRef=collection(docRef, "entrenamientos")     
  const workDoc = doc(colRef, id2)
  await deleteDoc(workDoc)
  dispatch(listaRoutines())
}

   


    //hooks
// let [ejercicios, setejercios]= useState([])
// let [ejercicios1, setejercios1] = useState([])

// //refrerenciamos a la db firestore

// const ejerciciosCollection = collection(db, "ejercicios")

// //funcion para mostrar todos los docs

// const getEjercicios = async () => {

//     const data =await getDocs(ejerciciosCollection)
//     console.log(data.docs)
//     const ejercicios1=data.docs

// const info=ejercicios1.map((doc)=> ({...doc.data(),id:doc.id}));
//     console.log(info)
//     const ejercicios=info
//     console.log(ejercicios)

// }


// useEffect( () => {
// getEjercicios()
// }, [])





  return (
    <Container fluid className="background-work">
    <Row>



<NavBar/>

<Col md="12">
<div className="routes-work">
<NavLink to="/home" className="current">Home</NavLink><BiChevronRight size={25} style={{ color:'#fff' }}/><NavLink to="/workouts" className="current2">Workouts</NavLink> 
</div>
</Col>


<div className="workouts-list mt-3">

{
  Routines?.map((elemento)=>{
    return(

<div className="custom-btn2 btn-2"  key={uuidv4()}>
<Link className="button-close" to={`/workg/${elemento.id}`}> 
<div className="col-4 img-fluid">
<img  src={elemento.img} alt="img" className="img-work"/>
</div>

<div className="col-5 workouts-items">
<span>{elemento.name}</span>
</div>

<div className="col-3 workouts-items">
<i className='bx bx-chevron-right-circle icon-work'></i>
</div>
</Link>
</div>

  )})
}
</div>


<ButtonNavBar />


</Row>
</Container> 

  )
  }

  export default Workouts;
