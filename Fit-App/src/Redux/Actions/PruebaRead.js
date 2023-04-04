import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { workTypes } from '../Types/workTypes'




// Leer datos
export const readDate = (id) => {
    return async( dispatch) => {
        try {
            const workout = []
            const docRef=doc(db, "users", id)
            const colRef=collection(docRef, "mywork")
            const resp = await getDocs(colRef)
            resp.forEach( (doc) => workout.push(doc.data()))
            dispatch(readDateSync( workout ))
        } catch ( err ) {
            alert(' Servidor no responde, intente mas tarde')
        }
    }
}

const readDateSync = ( workout ) => ({
    type: workTypes.readw,
    payload: workout
})

