
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { workTypes } from '../Types/workTypes'
import { useSelector } from 'react-redux'
import { BookSharp, WorkOutlineOutlined } from '@mui/icons-material'

//Metodo set (el id lo especifico yo)
// export const addWorkout = ( work ) => {
//     return (dispatch) => {
//         const { uid } = useSelector( state => state.login )
//         setDoc(doc(db, "citas", uid), work)
//         .then( (resp) => {
//             dispatch( addDateSync( work ) )
//             alert('cita agendada con exito')
//         })
//     }
// }

// const addDateSync = ( work ) => ({
//     type: workTypes.add,
//     payload: work
// })

//create subcolection workout 
export const addWorkout = ( workout,  uid ) => {
    return async (dispatch) => {
        const docRef=doc(db, "users", uid)
        const colRef=collection(docRef, "mywork")
        await addDoc(colRef, workout);
       
            dispatch( addWorkoutSync( workout ) )
            
       
    }
}

const addWorkoutSync = ( workout ) => {
    return{
    type: workTypes.addw,
    payload: workout
}}



// read user subcoleccion
// export const listaWorkoutsUser = (id) =>{
//     return async (dispatch)=>{
        
//         const docRef=doc(db, "users", id)
//         const colRef=collection(docRef, "mywork")
//          const data =await getDocs(colRef)
//         console.log(data.docs)
//         const ejercicios2=data.docs
//         const info=ejercicios2.map((doc)=> ({...doc.data(),id:doc.id}));
//         console.log(info)
//          const ejercicios=info;
//         console.log(ejercicios)
//         dispatch(listaWorksUser(ejercicios))
//     }
// }
// export const listaWorksUser = (Work2)=>{
//         return{
//             type: workTypes.readw,
//             payload: Work2
//         }
// }


// read user subcoleccion
export const listaWorkoutsUser = (id) =>{
    return async (dispatch)=>{
        
        const docRef=doc(db, "users", id)
        const colRef=collection(docRef, "mywork")
         await onSnapshot(colRef, (snapshot)=>{
            const ejercicios2=snapshot.docs
            const info=ejercicios2.map((doc)=> ({...doc.data(),id:doc.id}));
            console.log(info)
            const ejercicios=info;
dispatch(listaWorksUser(ejercicios))
            })
            
         } 
    }

export const listaWorksUser = (Work2)=>{
        return{
            type: workTypes.readw,
            payload: Work2
        }
}





//edit workout
export const editWorkout = (editwork, id1, id2) => {
    return( dispatch) => {

         const docRef=doc(db, "users", id1)
        const colRef=collection(docRef, "mywork")     
        const workDoc = doc(colRef, id2)
        setDoc(workDoc, editwork)
        .then(resp => {
            dispatch(editWork(editwork))
        })
        .catch(error => {
            console.log(error);
        })
    }
 }
 
 export const editWork = (editwork) => {
     return{
         type: workTypes.editw,
         payload: editwork
     }
 
 }



// // Leer datos db general ejercicios
// export const listaWorkouts = () =>{
//     return async (dispatch)=>{
//         const ejerciciosCollection = collection(db, "ejercicios")
//         const data =await getDocs(ejerciciosCollection)
//         console.log(data.docs)
//         const ejercicios2=data.docs
    
//         const info=ejercicios2.map((doc)=> ({...doc.data(),id:doc.id}));
//         console.log(info)
//          const ejercicios=info;
//         console.log(ejercicios)
//         dispatch(listaWorksSync(ejercicios))
//     }
// }
// export const listaWorksSync = (Work)=>{
//         return{
//             type: workTypes.read,
//             payload: Work
//         }
// }




// // Leer datos usuario 
// export const DatosUser = () =>{
//     return async (dispatch)=>{
//         const { uid } = useSelector( state => state.login )
//         const colRef=collection(db, "users")
//          const data =await getDocs(colRef)
//         console.log(data.docs)
//         const ejercicios2=data.docs
//         const info=ejercicios2.map((doc)=> ({...doc.data(),id:doc.id}));
//         console.log(info)
//          const ejercicios=info;
//         console.log(ejercicios)
//         const filtrado = ejercicios.filter(elemento => elemento.id === uid);
//         dispatch(dataUser(filtrado))
//     }
// }
// export const dataUser = (Work2)=>{
//         return{
//             type: workTypes.read2,
//             payload: Work2
//         }
// }



