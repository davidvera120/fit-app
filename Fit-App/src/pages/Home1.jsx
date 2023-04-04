
import NavBar from '../components/navbars/NavBar';
import Slider from '../components/sliders/Slider';
import Buttons from '../components/Buttons';
import Filtro2 from '../components/homeRoutines/Filtro2';
import ModalVideo from '../components/modals/ModalVideo';
import {Link} from 'react-router-dom';
import {listaEjercicios} from '../Redux/Actions/readAction1';
import { useSelector, useDispatch } from 'react-redux';
import cover1 from '../images/cover1.jpeg'
import {TextIntro2, Container1, Container2, Buttonfilter, ButtonHome, ButtonLink, ButtonIntro2} from "../styles/PagIntro"
import React, {useState, useEffect} from 'react';
import {collection, getDocs, getDoc, deleteDoc, connectFirestoreEmulator, doc} from 'firebase/firestore'; 
import {db} from '../firebase';
import { getAuth, signOut } from "firebase/auth";
import {auth} from "../firebase"
import ButtonNavBar from '../components/navbars/ButtonNavBar';
import { useNavigate } from 'react-router';
import './pages.css';


export const Home1 = () => {


// const [work, setwork] = useState([])

// const [filtrado, setfiltrado] = useState([])
//     const ObtenerDatos = async () => {
//         const data =await fetch("http://localhost:3001/ejercicios");
//         const Preg= await data.json()
//         setwork(Preg)
//         console.log(work)
        
//     }
//     useEffect(() => {
//     ObtenerDatos()
   
//     },[])

// const {Workouts} = useSelector(state => state.read2)
// const dispatch = useDispatch();
// const [filtrado, setfiltrado]= useState(Workouts)
// const navigate = useNavigate();


// const filtrar= async (cat) => {
   
//   const Workouts1= Workouts.filter(elemento => elemento.categoria === cat);
//   setfiltrado(Workouts1)
 
 
//  }

//  const getdata = async () => {
//   setfiltrado(Workouts);

//  }


// useEffect(() => {




//     },[dispatch])

   


  return (
    <div className="fondo1">
   
  
    
<NavBar />


<Slider />


<Buttons />

  
<ModalVideo/>


<ButtonNavBar />

    </div>
    
  )
}
export default Home1
