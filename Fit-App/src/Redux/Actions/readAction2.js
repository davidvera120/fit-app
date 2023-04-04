
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, getDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { homeTypes3} from '../Types/userTypes'


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