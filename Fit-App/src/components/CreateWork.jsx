import React, {useState, useEffect} from 'react';

import {    Link} from 'react-router-dom';
import {collection, getDocs, deleteDoc, connectFirestoreEmulator, doc} from 'firebase/firestore'; 
import {db} from '../firebase';
import { ButtonIntro2 } from '../styles/PagIntro'
import {TextIntro2, Container1, Buttonfilter} from "../styles/PagIntro"
import NavBar from './NavBar';
import { Create } from '@mui/icons-material';

export const CreateWork = () => {

        //hooks
        const [ejercicios1, setejercicios1]= useState([])
        // const [ejercicios2, setejercicios2] = useState([])
        const [filtrado, setfiltrado]= useState([])
        //refrerenciamos a la db firestore
        
        const ejerciciosCollection = collection(db, "ejercicios")
        
        //funcion para mostrar todos los docs
        
        const getEjercicios = async () => {
        
            const data =await getDocs(ejerciciosCollection)
            console.log(data.docs)
            const ejercicios2=data.docs
        
        // const info=ejercicios2.map((doc)=> ({...doc.data(),id:doc.id}));
            console.log(ejercicios2)
            
             setejercicios1(ejercicios2)
        }
        
        const deleteWorkout = async (id) => {
        
            const workDoc = doc(db, "ejercicios", id)
            await deleteDoc(workDoc)

           getEjercicios() 
        }
        
        
        useEffect( () => {
        getEjercicios()
        }, [])
        
         const filtrar= (cat) => {
           
        const filtrado1 = ejercicios1.filter(elemento => elemento.categoria === cat);
        setfiltrado(filtrado1)
        }

  return (
    <div className="col-12">
    <div className="row">

   
    <NavBar />

    <div className="col-12" Style="margin-top:140px;font-size:20px;">
    <div className="row" Style=" text-align:center; justify-content:center; aling-items:center">
    <h1>Create Workout</h1>
    
    </div>
    </div> 

    <div className="col-12" Style="margin-top:20px;">
    <div className="container" Style=" text-align: center; aling-items:center; justify-contet:center;">
    <Buttonfilter onClick={()=>{filtrar("body")}}>All body</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("triceps")}}>Triceps</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("biceps")}}>Biceps</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("breast")}}>Breast</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("back")}}>Back</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("legs")}}>Legs</Buttonfilter>
    </div>
    </div>

    <div className="col-12" Style="margin-top:20px;">
    <div className="row">
    <div className="container">
   
   {
    filtrado.map(elemento=>(
      
        <div className="col-12 mt-4" Style="text-align:center; justify-content: center;">
        <div className="container">
        <ButtonIntro2>
        
        <div className="col-12">
        <div className="row">
        <div className="col-2">
        <i className='bx bx-dumbbell' Style="margin-left:10px; font-size:18px"></i>
        </div>
        <div className="col-7">
        <h1 Style="margin-left:-20px; margin-right:5px;">{elemento.name}</h1>
        </div>
        <div className="col-3" Style="font-size:20px">
        <button onClick={ ()=> {deleteWorkout(elemento.id)}}><i className='bx bxs-trash' Style="margin-left:-30px; margin-right:15px;"></i></button>
        <Link to="/edit"><i className='bx bx-edit'></i></Link>
        </div>
        </div>
        </div>
         
<div className="col-12">
<div className="row">

</div>
</div>


        </ButtonIntro2>
        </div>
        </div>
    
    ))
   
   }
   </div>
   </div>
   </div>
   </div>
</div>
  );
}
export default CreateWork;