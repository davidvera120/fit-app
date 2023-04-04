import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {readDate} from '../../Redux/Actions/PruebaRead';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore';
import {db} from '../../firebase'
import {ModalEditWork} from '../ModalEditWork';
import { ButtonIntro1, TextIntro,Select1, Singupfrm, Form, Label, Input2, InputContainer, Container3,CardPet,  ButtonHome, Buttonfilter, Container4 } from '../../styles/PagIntro';
import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import { getDownloadURL, getStorage, ref, uploadBytes, deleteObject } from 'firebase/storage';
import {storage} from '../../firebase'
import ReactPlayer from "react-player";
import {MdFitnessCenter, MdDeleteForever} from "react-icons/md"
import {editWorkout, listaWorkoutsUser} from '../../Redux/Actions/CreateWorkAction';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { v4 as uuidv4 } from 'uuid';
import "./createdWorkouts.css";
import {BiChevronRightCircle, BiEdit } from 'react-icons/bi';

const MySwal = withReactContent(Swal);

export const ReadWorkout = () => {
   



    const dispatch = useDispatch();
    const user  = useSelector( state => state.login )
    const id1=user.id; 
    
    const {Workout} = useSelector(state => state.readw)
    
    const navigate = useNavigate();



    useEffect(() => {
        dispatch( listaWorkoutsUser(id1))
    
    
         },[dispatch])

    async function uploadImage (file){
        // setUid(v4)
        setLoading1(true);
        const storageRef=ref(storage, id1);
        // console.log(uid)
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        return url;
        }
      
      async function uploadVideo (file){
        const storageRef=ref(storage, id1+'2');
        setLoading2(true);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        return url;
        }
      
      const uploadImage1 = async (e) => {
        e.preventDefault()
        const archivo=e.target.files[0]
        try{ 
          const result = await uploadImage(archivo);
          setLoading1(false);
          console.log(result);
          setImage(result)
          console.log(foto)
          }catch(error){
           console.error(error)
          }
        } 
      
      const uploadVideo1 = async (e) => {
      e.preventDefault()
      const archivo=e.target.files[0]
      try{ 
        const result = await uploadVideo(archivo);
        console.log(result);
        setLoading2(false)
        setVideo(result)
        console.log(video)
        }catch(error){
         console.error(error)
        }   
      }  



      const [name, setName]=useState('')
const [categoria, setCategoria] = useState('')
const [descripcion, setDescripcion] = useState('')
const [foto, setImage] = useState('')
const [video, setVideo] = useState('')
const [id2, setId2] = useState('')
const [abierto, setabierto] = useState(false)
const [loading1, setLoading1] = useState(false)
const [loading2, setLoading2] = useState(false)

const [filtrado, setFiltrado] = useState([])
const [work, setWork] = useState([])

const CloseEdit = async (valor) => {
  setabierto(valor)
 
}

const ModaleditWorkout = async (id3) => {
console.log(id3)
  const filtrado1 = Workout.filter((elemento) =>{
    return elemento.id===id3; 
});
const filtrado2=filtrado1[0];
    setName(filtrado2.name)
    setImage(filtrado2.foto)
    setDescripcion(filtrado2.descripcion)
    setCategoria(filtrado2.categoria)
    setVideo(filtrado2.video)
    setId2(filtrado2.id)
  setabierto(true)
  
}

const editWorkout2 = async (e) => {
    e.preventDefault()
    
    dispatch(editWorkout({name: name, categoria: categoria, descripcion: descripcion, video: video, foto: foto}, id1, id2 ));

   
  
    } 

    const deleteWorkout = async (id2, uid) => {
        const docRef=doc(db, "users", id1)
        const colRef=collection(docRef, "mywork")     
        const workDoc = doc(colRef, id2)
        const ruta=`${id1}/${uid}`;
        const storageRef = ref(storage, ruta );
        await deleteObject(storageRef);
        await deleteDoc(workDoc)
      }

   

  return (
 
    <div>
   
{
  Workout?.length>0?
  <div className="row workG">
  
  <CardPet>
    {
        Workout?.map((elemento)=>{
          return( 
      <div className="custom-btn2 btn-2" key={uuidv4()}>
       
      <div className="col-3 img-fluid">
      <img  src={elemento.foto} alt="img" className="img-work2"/>
      </div>
      
      <div className="col-6 workouts-items">
       <span>{elemento.name}</span>
      </div>

      <div className="col-2 workouts-items">
      <BiChevronRightCircle size={40} style={{color:"#2BE7E8"}}/>
      </div>
      
      <div className="col-1">
      <Link to ={`/editwork/${elemento.id}`}><BiEdit size={20} style={{color:"#fff", marginTop:"0px", marginRight:"3px"}}/></Link>
      <button className="btnClose"  onClick={ ()=> {deleteWorkout(elemento.id, elemento.ruta)}}><MdDeleteForever size={20} style={{color:"red", marginTop:"45px", marginRight:"3px"}}/></button>
      </div>
      </div>
      )})
    }
    </CardPet>
    </div>
   
      : <div className="col-12 mb-5 workG">
      <h2>you dont have workouts created!</h2>
      <MdFitnessCenter size={40} style={{color:"#fff"}}/>
      </div>
     
  } 
</div>


  )
}

export default ReadWorkout;