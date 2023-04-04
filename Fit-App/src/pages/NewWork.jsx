import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { ButtonIntro1, TextIntro,Select1, Singupfrm, Form, Label, Input2, InputContainer, Container3,  ButtonHome, Buttonfilter, Container4 } from '../styles/PagIntro'
import {db} from '../firebase'
import ButtonNavBar from '../components/navbars/ButtonNavBar';
import NavBar from '../components/navbars/NavBar';
import create2 from '../images/create2.jpg';
import create1 from '../images/create1.jpeg';
import { useSelector, useDispatch } from 'react-redux';
import { listaWorkoutsUser} from '../Redux/Actions/CreateWorkAction';
import { listaRoutineUser} from '../Redux/Actions/CreateRoutineAction';
import './pages.css';
import {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore'; 
import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import {Badge, Card, Navbar, Nav, Table, Container, Row, Col, OverlayTrigger, Tooltip} from "react-bootstrap";
import { SignalCellularConnectedNoInternet2BarRounded, WindowSharp } from '@mui/icons-material';
import {MyRoutine} from '../components/createdRoutines/MyRoutine'
import {ReadWorkout} from '../components/createdWorkouts/ReadWorkout'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { useHistory } from 'react-router'
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);


export const NewWork = () => {

const dispatch = useDispatch();
const user  = useSelector( state => state.login )
const id1=user.id; 
const {Routine2} = useSelector(state => state.readr)

const {Workout} = useSelector(state => state.readw)

const [routine1, setRoutine1] = useState([])

// // const ejerciciosCollection = collection(db, "users")
// // const  ejercicioCollection= doc(db, 'users', 'prueba', '' )
// // const ejercicios1=collection(db, 'entrenamiento');
// const refejercicios = collection(db, 'users')
// const coluser=collection(db, 'users')
// // crear documento con el id del usuario logeado
// const docuser=doc(db,"users", 'abc123')
// // crear documento en la subcolecciion del usuario
// const docRef=doc(db, "users", "abc123")
// const colRef=collection(docRef, "entrenamientos")
// const NewWorkout = async (e) => {
// e.preventDefault()
// // await addDoc (ejerciciosCollection,{name: name, video: video, descripcion: descripcion, img: img, categoria: categoria, duracion: duracion } )
// await addDoc(colRef, {name: name, video: video, descripcion: descripcion, img: img, categoria: categoria, duracion: duracion });
// }





// const deleteWorkout = async (id2) => {
//   const docRef=doc(db, "users", id1)
//   const colRef=collection(docRef, "mywork")     
//   const workDoc = doc(colRef, id2)
//   await deleteDoc(workDoc)
//   dispatch( listaWorkoutsUser(id1))
// }

// const deleteRoutine = async (id2) => {

//   const docRef=doc(db, "users", id1)
//   const colRef=collection(docRef, "routines")     
//   const workDoc = doc(colRef, id2)
//   await deleteDoc(workDoc)
//   dispatch( listaRoutineUser(id1))
  
// }

const readCreate = async () => {
 
  const nameRoutine = Routine2?.map(routine => routine.name)
  console.log(nameRoutine)
  const routine = nameRoutine.filter((valor, indice) => 
    nameRoutine.indexOf(valor) === indice
  );

  setRoutine1(routine)
}

// const filtrar = (cat) => {
//   const filtrado1 = Routine2.filter((elemento) =>{
//                return elemento.name===cat; 
//            });

// setFiltrado(filtrado1)
// console.log(filtrado)

// }



  
 

//   useEffect(() => {
// dispatch( listaRoutineUser(id1))
// readCreate();
  
//     },[])

  return (
    <Container fluid className="background">
    <Row>
  <NavBar />

  <Col md="12" className="mt-5">
  <div className="pages-list">
  <Link to="/create1">
  <Container3> 
  <img src={create1} className="img-cover"  alt="cover"/>
  <Container4>
  <h3 className="titulo-cover">Create a Training Routine</h3>
  </Container4>
  </Container3>
  </Link>

  <Link to="/create2">
  <Container3>
  <img src={create2} className="img-cover" alt="cover"/>
  <Container4>
<h3 className="titulo-cover">Create Workout</h3>
</Container4>
  </Container3>
  </Link>
</div>
</Col>

<Col md="12" className="mt-4">
  <div className="titulo">
  <h2> My Training Routines</h2> 
</div>
</Col>

<div className="col-12 mt-2 mb-2">

<MyRoutine/> 

</div>

<Col md="12" className="mt-3">
<div className="titulo">
<h2> My Workouts</h2>
</div>
</Col>

<div className="col-12 mb-5">

<ReadWorkout />

</div>

<ButtonNavBar />

</Row>
</Container>

  )
}
export default NewWork;
