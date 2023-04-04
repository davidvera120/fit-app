
import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom';
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input3, Input4, Input2, InputContainer, InputContainer1, Buttonfilter, Cardwork } from '../../styles/PagIntro'
import { collection, addDoc, setDoc, doc,} from '@firebase/firestore';
import {db} from '../../firebase'
import ButtonNavBar from '../navbars/ButtonNavBar';
import NavBar from '../navbars/NavBar';
import {listaRoutines} from '../../Redux/Actions/readAction1';
import {listaGroups} from '../../Redux/Actions/readAction2';
import { useSelector, useDispatch } from 'react-redux';
import { SettingsInputHdmiTwoTone, SettingsInputSvideo, SettingsRemote } from '@mui/icons-material';
import { addRoutine } from '../../Redux/Actions/CreateRoutineAction';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './rutines2.css';
import { v4 as uuidv4 } from 'uuid';
import {Badge, Card, Navbar, Nav, Table, Container, Row, Col, OverlayTrigger, Tooltip} from "react-bootstrap";
const MySwal = withReactContent(Swal);

export const CreateRoutine = () => {

  const user  = useSelector( state => state.login )
    
    const id1=user.id;  

    const [name, setName]=useState('')
    const [week, setWeek] = useState('')
    const [day, setDay] = useState('')
    const [date, setDate] = useState('')
    const [weight, setWeight] = useState('')
    const [series, setSeries] = useState('')
    const [rep, setRep] = useState('')
    const [video, setVideo] = useState('')
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('');
    const [name2, setName2] = useState('');
    const [arreglo, setArreglo] = useState([]);
    const video1=useRef(null);
    const img1=useRef(null);
    const name1=useRef(null);
  
    const [isChecked, setIsChecked] = useState(false);


    // const [work, setwork] = useState({
    //     name: "",
    //     descripcion:"",
    //     duracion:"",
    //     video: "",
    //     img:"",
    //     categoria:""
    //   });
    
    
    
    // const ejerciciosCollection = collection(db, "users")
    
    // // const  ejercicioCollection= doc(db, 'users', 'prueba', '' )
    // // const ejercicios1=collection(db, 'entrenamiento');
    // const refejercicios = collection(db, 'users')
    // const coluser=collection(db, 'users')
    
    
    // // crear documento con el id del usuario logeado
    // const docuser=doc(db,"users", 'abc123')
     
    // // crear documento en la subcolecciion del usuario
    // const docRef=doc(db, "users", "abc123")
    // const colRef=collection(docRef, "entrenamientos")




    const [filtrado, setfiltrado]= useState([])
   
  const {Routines} = useSelector(state => state.read1)
    const {WorkoutsG} = useSelector(state => state.read3)
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const filtrar = (cat) => {
      const filtrado1 = Routines.filter((elemento) =>{
                   return elemento.name===cat; 
               });

  const idw=filtrado1[0].id;
   console.log(filtrado)
   dispatch(listaGroups(idw))

 }

  

   
    
    useEffect(() => {
      
    dispatch(listaRoutines())

    
    },[dispatch])

   

    // <div className="contain" Style="margin:-10px; display:none">  
    // <input type="text" value={elemento.video} ref={video1} checked={isChecked}/>
    // <input type="text" value={elemento.img} ref={img1} checked={isChecked} />
    // <input type="text" value={elemento.name} ref={name1} checked={isChecked} />
  
    // </div> 

  const NewRoutine = (img, name2, video) => {
  // e.preventDefault();
  // const video2=video1.current.value;
  // // const img2=img1.current.value;
  // // const name2=name1.current.value;
  // const description2=description1.current.value;
  //setIsChecked(true)
  
  // setVideo(video1.current.value)


  dispatch(addRoutine({name: name, week: week, day: day, date: date, series: series, rep:rep, weight:weight, img:img, video: video, name2: name2}, id1));
  MySwal.fire({
    title: <strong Style="background:none; color:rgb(0,70,148)">Workout added</strong>,
    html: <i Style="background:none">Welcome Back</i>,
    icon: 'success'
   }) 
 
  }


  return (
    <Container fluid className="background-routines">
    <Row>
    <NavBar />
      <div className="col-12">
      <div className="container" Style="justify-content: center;aling-items:center; gap:5px;">
  
  
      
   
      <div className="col-12">
      <div className="container d-flex general1" Style="margin-top:170px;">  
      <h6 className="inputwork">Name</h6>
      <Input2 type="text" name="name"  onChange={(e) => setName(e.target.value)} placeholder="Training Routine Name" required/>
      </div>
      </div>

      <div className="col-12">
      <div className="container d-flex general1" Style="margin-top:70px;width:350px;"> 
      
      <div className="container d-flex general1">  
      <h6 className="inputwork4">Week</h6>
      <Input3 type="number" name="week"   onChange={(e) => setWeek(e.target.value)} placeholder="week"/>
   
    </div>

   
    <div className="container d-flex general1">  
    <h6 className="inputwork5">Day</h6>
      <Input3 type="number" name="day"   onChange={(e) => setDay(e.target.value)} placeholder="day"/>
 
    </div>
    </div>
    </div>

    <div className="col-12">
      <div className="container d-flex general1" Style="margin-top:70px;">  
      <h6 className="inputwork">Date</h6>
      <Input2   type="date" name="date"   onChange={(e) => setDate(e.target.value)} placeholder="day"/>
    </div>
    </div>
  
    <div className="col-12">
   <div className="container d-flex general1" Style="margin-top:40px;gap:5px;">
    <i className='bx bx-dumbbell' Style="font-size:23px; margin-top:-7px;color:#2BE7E8" ></i><h5 Style="color:#2BE7E8">Add Workout</h5>
    </div>
    </div>
    <div className="col-12 mt-2">
    <div className="d-flex" Style="text-align:center;justify-content:center;align-items:center; gap:5px; flex-wrap:wrap">
    <Buttonfilter onClick={()=>{filtrar("Triceps")}} >Triceps</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("Biceps")}}>Biceps</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("Forearm")}}>Forearm</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("Shoulders")}}>Shoulders</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("Back")}}>Back</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("Legs")}}>Legs</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("Buttocks")}}>Buttocks</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("Chest")}}>Brest</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("Abs")}}>Abs</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("stretching")}}>Stretching</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("body")}}>Full Body</Buttonfilter>
    <Buttonfilter onClick={()=>{filtrar("cardio")}}>Cardio</Buttonfilter>
    </div>
    </div>
 
  
  <div className="col-12" Style="margin-top:20px; margin-bottom:70px">
  <div className="container d-flex" Style="text-align:center;justify-content:center;align-items:center; gap:15px;flex-wrap:wrap">
  {
    WorkoutsG?.map((elemento)=>{ 
     return( 
      <Cardwork>
 
      <div className="container d-flex" key={elemento.id}>
      
      <div className="col-2 img-fluid" Style="">
      <img  src={elemento.img} alt="img" Style="height:90px;width:90px; margin-left:-30px; margin-top:-3px;border-radius:5px; background:none;"/>
      </div>
      
      <div className="col-10" Style="">
      <h6 Style="font-size:1.2rem;color:#fff;">{elemento.name}</h6>
      
      <div className="container d-flex general1" Style="margin-top:30px; margin-left:20px; justify-content:center; gap:20px"> 
      
      <div className="d-flex general1">  
      <h6 className="input4">Series</h6>
      <Input4  type="number" name="series" onChange={(e) => setSeries(e.target.value)} placeholder="#"/>
      </div>

      <div className="d-flex general1">  
      <h6 className="input4">Rep</h6>
        <Input4 type="number" name="rep"   onChange={(e) => setRep(e.target.value)} placeholder="#"/>
   
      </div>
      <div className="d-flex general1">  
      <h6 className="input4">Weight</h6>
        <Input4 type="number" name="weight"   onChange={(e) => setWeight(e.target.value)} placeholder="kg"/>
   
      </div>
   
      <div className="container d-flex general1"> 
      <button  className="custom-btn3 btn-3" onClick={()=>{NewRoutine(elemento.img, elemento.name, elemento.video)}}>
      +Add Workout      
      </button>
      </div>
      </div>
   
      </div> 
      </div>
      
      </Cardwork>
     
  )})
}
  </div>
  </div>
 
  </div>
  </div>
  <ButtonNavBar /> 
  </Row>
  </Container>
 
  )
}

export default CreateRoutine