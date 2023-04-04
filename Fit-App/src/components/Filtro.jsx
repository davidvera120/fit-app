
import {collection, getDocs, getDoc, deleteDoc, connectFirestoreEmulator, doc} from 'firebase/firestore'; 
import {TextIntro2, Container1, Container2, Buttonfilter, ButtonHome, ButtonLink, ButtonIntro2} from "../styles/PagIntro"
import React, {useState, useEffect} from 'react';
import {db} from '../firebase';
import {listaEjercicios} from '../Redux/Actions/readAction1';
import { useSelector, useDispatch } from 'react-redux';

export const Filtro = (props) => {

//hooks
const [ejercicios1, setejercicios1]= useState([])



const {Workouts} = useSelector(state => state.read2)

const [filtrado, setfiltrado]= useState(Workouts)
// //refrerenciamos a la db firestore
// const ejerciciosCollection = collection(db, "ejercicios")
// //funcion para mostrar todos los docs
//  const getEjercicios = async () => {

//     const data =await getDocs(ejerciciosCollection)
//     console.log(data.docs)
//     const ejercicios2=data.docs

// const info=ejercicios2.map((doc)=> ({...doc.data(),id:doc.id}));
//     console.log(info)
//      const ejercicios=info;
//      setejercicios1(ejercicios)
// setfiltrado(ejercicios)
// }



const dispatch = useDispatch();




useEffect(() => {

  
  dispatch(listaEjercicios())
 

    },[dispatch])




  return (
    <div>
    


<div className="col-12 mt-4 mb-5">
<div className="container d-flex" Style="text-align: center;justify-content:center; gap:30px; flex-wrap:wrap;">


<Container1>

<img src={props.img}  Style="height:100%; width:100%;objet-fit:cover" alt="cover"/>

<Container2>
<div className="col-9">
<p Style="font-size:16px; background:none; color:#252525; margin-left:10px">{props.name}</p>
</div>
<div className="col-3">
<p Style="font-size: 13px; background:none; color:#252525">{props.duracion}</p>
</div>
</Container2>

</Container1>


</div>
</div>
    </div>
  )
}

export default Filtro