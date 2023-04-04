import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { routineTypes } from '../Types/routineTypes'


//create subcolection workout 
export const addRoutine = ( routine,  uid ) => {
    return async (dispatch) => {
        const docRef=doc(db, "users", uid)
        const colRef=collection(docRef, "routines")
        await addDoc(colRef, routine);
       
            dispatch( addRoutineSync( routine ) )           
    }
}

const addRoutineSync = ( routine ) => {
    return{
    type: routineTypes.addr,
    payload: routine
}}

// read user subcoleccion
// export const listaRoutineUser = (id) =>{
//     return async (dispatch)=>{
        
//         const docRef=doc(db, "users", id)
//         const colRef=collection(docRef, "routines")
//          const data =await getDocs(colRef)
//         console.log(data.docs)
//         const ejercicios2=data.docs
//         const info=ejercicios2.map((doc)=> ({...doc.data(),id:doc.id}));
//         console.log(info)
//          const routine2=info;
//         console.log(routine2)
//         dispatch(listaRoutinesUser(routine2))
//     }
// }
// export const listaRoutinesUser = (routine2)=>{
//         return{
//             type: routineTypes.readr,
//             payload: routine2
//         }
// }


export const listaRoutineUser = (id) =>{
    return async (dispatch)=>{
        
        const docRef=doc(db, "users", id)
        const colRef=collection(docRef, "routines")
         await onSnapshot(colRef, (snapshot) =>{ 
       
        const ejercicios2=snapshot.docs
        const info=ejercicios2.map((doc)=> ({...doc.data(),id:doc.id}));
        console.log(info)
         const routine2=info;
        console.log(routine2)
        dispatch(listaRoutinesUser(routine2))
    })
    }
}
export const listaRoutinesUser = (routine2)=>{
        return{
            type: routineTypes.readr,
            payload: routine2
        }
}

//edit workout
export const editRoutine = (editroutine, id1, id2) => {
    return( dispatch) => {

         const docRef=doc(db, "users", id1)
        const colRef=collection(docRef,"routines")     
        const workDoc = doc(colRef, id2)
        setDoc(workDoc, editroutine)
        .then(resp => {
            dispatch(editRoutines(editroutine))
        })
        .catch(error => {
            console.log(error);
        })
    }
 }
 
 export const editRoutines = (editroutine) => {
     return{
         type: routineTypes.editr,
         payload: editroutine
     }
 
 }