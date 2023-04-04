
import React, {useState, useEffect} from 'react'
import { ButtonIntro1, TextIntro,Select1, Singupfrm, Form, Label, Input2, InputContainer, Container3,  ButtonHome, Buttonfilter, Container4 } from '../styles/PagIntro';
import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import {storage} from '../firebase'
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { useHistory } from 'react-router'
import { listaWorkoutsUser} from '../Redux/Actions/CreateWorkAction';
import withReactContent from 'sweetalert2-react-content';
import { editWorkout} from '../Redux/Actions/CreateWorkAction';
import { WindowSharp } from '@mui/icons-material';
const MySwal = withReactContent(Swal);

export const ModalEditWork = (props) => {


    const user  = useSelector( state => state.login )
    const id1=user.id;
    const navigate = useNavigate();
    const {Workout} = useSelector(state => state.readw)
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch( listaWorkoutsUser(id1))
    ModaleditWorkout()

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

const ModalEdit = async (valor) => {
  setabierto(valor)
 
}

const ModaleditWorkout = async () => {

  const filtrado1 = Workout.filter((elemento) =>{
    return elemento.id===props.id3; 
});
const filtrado2=filtrado1[0];
    setName(filtrado2.name)
    setImage(filtrado2.foto)
    setDescripcion(filtrado2.descripcion)
    setCategoria(filtrado2.categoria)
    setVideo(filtrado2.video)
    setId2(filtrado2.id)
  
}

const editWorkout2 = async (e) => {
    e.preventDefault()
    
    dispatch(editWorkout({name: name, categoria: categoria, descripcion: descripcion, video: video, foto: foto}, id1, id2 ));

 MySwal.fire({
    title: <strong>Good job!</strong>,
    html: <i>Welcome Back</i>,
    icon: 'success'
  })
  
    } 





  return (
   <>

    <button  Style="border:none; background:none;"  onClick={()=>{ModalEdit(true)}}><i className='bx bx-edit cardU' Style="font-size:25px;"></i></button>
    <Modal isOpen={abierto} >

    <ModalHeader>
    <button onClick={()=>{ModalEdit(false)}} Style="background-color:none; border:none; font-size:25px"><i className='bx bx-x-circle'></i></button>
    <span Style="margin-left:20px; font-weight:500; font-size:30px;">Edit Workout</span>
    </ModalHeader>

         <ModalBody>
         <Form onSubmit={editWorkout2} >
  
         <div className="col-12">
         <div className="container d-flex general1" Style="margin-top:80px;">  
         <h6 className="inputwork">Name</h6>
         <Input2 type="text" name="name"   onChange={(e) => setName(e.target.value)} placeholder="Workout Name"/>
         </div>
         </div>
     
       <div className="col-12">
       <div className="container d-flex general1" Style="margin-top:90px;">  
       <h6 className="inputwork2">Category</h6>
       
       <Select1  onChange={(e) => setCategoria(e.target.value)} name="categoria">
       <option value="Triceps">Triceps</option>
       <option value="Biceps">Biceps</option>
       <option value="Shoulders">Shoulders</option>
       <option value="Legs">Legs</option>
       <option value="Forearm">Forearm</option>
       <option value="Cardio">Cardio</option>
       <option value="Full Body">Full Body</option>
       <option value="Brest">Brest</option>
       <option value="Back">Back</option>
       <option value="Buttocks">Buttocks</option>
       <option value="Abs">Abs</option>
       <option value="Stretching">Stretching</option>
       </Select1>
       </div>
       </div>
     
       <div className="col-12">
       <div className="container d-flex  general1" Style="margin-top:115px">
       <h6 className="inputwork3">Description</h6>
       <textarea  name="message" rows="4" placeholder="Write a description about your workout" onChange={(e) => setDescripcion(e.target.value)} />
       </div>
       </div>
     
     
     
      
       
       <div className="col-12 mb-3">
       <div className="container d-flex general1" Style="margin-top:80px">
     <input id="fileSelector" type="file" name="file" onChange={uploadImage1}/>
     <label className="label1" htmlFor="fileSelector"><i className='bx bx-image-add upload1'></i><h6 className="upload2">Upload image</h6></label>
     </div>
     </div>
     
     {loading1 ? (
         <div className="col-12">
         <div className="container d-flex general1">      
         <div className="spinner">
         <span></span>
         <span></span>
         <span></span>
       </div>
       </div>
       </div>
     ) : (
         <div className="col-12">
         <div className="container d-flex general1" > 
       <img src={foto} Style="width:50px; background:none"/>
       </div>
     </div>
     )}
     
     
     
     <div className="col-12 mb-3 mt-4">
     <div className="container d-flex general1">
     <input id="fileSelector2" type="file" name="file" onChange={uploadVideo1} />
     <label className="label1" htmlFor="fileSelector2"><i className='bx bx-video-plus upload1'></i><h6 className="upload2">Upload Video</h6></label>
     </div>
     </div>
     
     {loading2 ? (
       <div className="col-12">
       <div className="container d-flex general1" >      
       <div className="spinner">
       <span></span>
       <span></span>
       <span></span>
     </div>
     </div>
     </div>
     ) : (
         <div className="col-12">
       <div className="container d-flex general1" Style="width:100px">      
         <ReactPlayer Style="background:none" url={video}/>
     </div>
     </div>
     )}
     
<ModalFooter>
    <div className="col-12">
    <div className="container d-flex general1" >  
     <button  className="custom-btn btn-1 mt-4"  type="submit">
     
     Save Changes
     
     </button>
    </div>
    </div>  

</ModalFooter>
</Form>
  
  </ModalBody>

   
</Modal>
    </>
  )
}

export default ModalEditWork
