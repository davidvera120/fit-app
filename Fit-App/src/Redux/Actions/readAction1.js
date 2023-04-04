
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, getDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import {homeTypes, homeTypes2, homeTypes3} from '../Types/userTypes'


export const listaRoutines = () =>{
    return async (dispatch)=>{
      
        
        const colRef=collection(db, "workouts")
         const data =await getDocs(colRef)
        console.log(data.docs)
        const workouts=data.docs
        const info=workouts.map((doc)=> ({...doc.data(),id:doc.id}));
        console.log(info)
         const workouts1=info;
        console.log(workouts1)
        dispatch(listaRoutines1(workouts1))
    }
}


export const listaRoutines1 = (workouts2)=>{
    return{
        type: homeTypes.read1,
        payload: workouts2
    }
}


export const listaEjercicios = () =>{
    return async (dispatch)=>{
      
        
        const colRef=collection(db, "ejercicios")
         const data =await getDocs(colRef)
        console.log(data.docs)
        const ejercicios=data.docs
        const info=ejercicios.map((doc)=> ({...doc.data(),id:doc.id}));
        console.log(info)
         const ejer1=info;
        console.log(ejer1)
        dispatch(listaRoutines2(ejer1))
    }
}


export const listaRoutines2 = (workouts3)=>{
    return{
        type: homeTypes2.read2,
        payload: workouts3
    }
}



// export const listaPet = (uid) =>{
//     return async (dispatch)=>{
      
//         const docRef=doc(db, "data", uid)
//         const colRef=collection(docRef, "pet")
//          const data =await getDocs(colRef)
//         console.log(data.docs)
//         const pet2=data.docs
//         const info=pet2.map((doc)=> ({...doc.data(),id:doc.id}));
//         console.log(info)
//          const pet1=info;
//         console.log(pet1)
//         dispatch(listaPet1(pet1))
//     }
// }
// export const listaPet1 = (pet2)=>{
//         return{
//             type: petTypes.read1,
//             payload: pet2
//         }
// }



export const listaGroups = (uid) =>{
    return async (dispatch)=>{
      
        const docRef=doc(db, "workouts", uid)
        const colRef=collection(docRef, "lista")
         const data =await getDocs(colRef)
        console.log(data.docs)
        const grupo=data.docs
        const info=grupo.map((doc)=> ({...doc.data(),id:doc.id}));
        console.log(info)
         const grupo2=info;
        console.log(grupo2)
        dispatch(listaGroups1(grupo2))
    }
}
export const listaGroups1 = (grupo2)=>{
        return{
            type: homeTypes3.read3,
            payload: grupo2
        }
}