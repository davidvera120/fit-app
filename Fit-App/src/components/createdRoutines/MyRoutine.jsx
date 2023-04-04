import React, {useState, useEffect} from 'react'
import { ButtonIntro1, TextIntro,Select1, Singupfrm, Form, Label, Input2, InputContainer, Container3, ButtonHome, Buttonfilter, Container4, CardPet } from '../../styles/PagIntro'
import { listaRoutineUser} from '../../Redux/Actions/CreateRoutineAction';
import { useSelector, useDispatch } from 'react-redux';
import {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore'; 
import {db} from '../../firebase';
import { useNavigate } from 'react-router';
import './rutines2.css';
import {BiChevronRightCircle} from 'react-icons/bi';
import {} from 'react-icons/md';
import {MdFitnessCenter,MdDeleteForever} from "react-icons/md";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { v4 as uuidv4 } from 'uuid';
import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import {AiOutlineCloseCircle} from "react-icons/ai";
import {Badge, Card, Navbar, Nav, Table, Container, Row, Col, OverlayTrigger, Tooltip} from "react-bootstrap";
import ReactPlayer from "react-player";
const MySwal = withReactContent(Swal);

export const MyRoutine = () => {

    const [filtrado, setFiltrado] = useState([])
    const [categoria, setCat] = useState("")
    const dispatch = useDispatch();
    const user  = useSelector( state => state.login )
    const id1=user.id; 
    const {Routine2} = useSelector(state => state.readr)
    const [routine1, setRoutine1] = useState([])
    
    const navigate = useNavigate();

    const [abierto, setabierto]= useState(false);
    const [videoRoutine, setVideoRoutine]= useState("");
    const [nameRoutine, setNameRoutine]= useState("")
    
    const funcionModal = (valor, video, name) => {
        setabierto(valor);
        setVideoRoutine(video);
        setNameRoutine(name);
    }

    const filtrar= async (cat) => {
      const filtrado1= Routine2?.filter(elemento => elemento.name === cat);
      setFiltrado(filtrado1);     
    }

       const readCreate = async () => { 
        const nameRoutine = Routine2?.map((routine) => routine.name)
        console.log(nameRoutine)
        const routine=nameRoutine?.filter((valor, indice) => 
          nameRoutine.indexOf(valor) === indice);
        setRoutine1(routine); 
      }

      const closeRoutine = async () => { 
       setFiltrado([]);
      }


      function update(idU, catU)  {
        deleteRoutine(idU);
        filtrar(catU);
        setCat(catU);
        MySwal.fire({
          title: <strong>Workout Delete</strong>,
          html: <i className='bx bxs-trash' Style="font-size:22px"></i>,
          icon: 'success'
        })  
    }

     const deleteRoutine = async (id2) => {
        const docRef=doc(db, "users", id1);
        const colRef=collection(docRef, "routines");     
        const workDoc = doc(colRef, id2);
        await deleteDoc(workDoc);
       }

       useEffect(() => {
        filtrar(categoria);
           },[Routine2])

     useEffect(() => {
      readCreate(Routine2);
         },[Routine2])

       useEffect(() => {
       dispatch( listaRoutineUser(id1))
        },[dispatch])

  return (
<>
    <div className="row routines mt-3">
    
    {routine1?.length>0?
      <div className="col-12 routines-list">
    {
          routine1?.map((element)=>{
            return(  
            <ButtonHome key={uuidv4()} onClick={() => { filtrar(element)} }>
            <span></span>
            <span></span>
            <span></span>
            <span></span>{element}
           </ButtonHome>
          )})
      }
      </div>
      : 
      <div className="col-12 routinesG">
      <h2>You dont have training routines created!</h2>
      <MdFitnessCenter size={40} style={{color:"#fff"}}/>
      </div>
    } 
     
      </div>
      
      <div>
      {filtrado?.length>0? 
        <div className="row routinesR">
      
        <CardPet>
     
        {
          filtrado?.map((elemento) => {
                 return( 
                  
            <div className="custom-btnR btn-R" key={uuidv4()}>
            <button className="button-close"    onClick={()=>{funcionModal(true, elemento.video, elemento.name2)}}>
            <div className="col-2 img-fluid">
            <img  src={elemento.img} alt="img" className="img-work"/>
            </div>
            
            <div className="col-8 marginR">

            <h6 className="span-work mt-3">{elemento.name2}</h6>
            
            <div className="d-flex mt-2 info"> 
            <div>  
            <h6>Series</h6>
            <h6>{elemento.series}</h6>
            </div>

            <div>  
            <h6>Rep</h6>
            <h6>{elemento.rep}</h6>
            </div>

            <div>  
            <h6>Weight</h6>
            <h6>{elemento.weight}Kg</h6>
            </div>
            </div>

            </div>
            
            
            <div className="col-2 workouts-items">
            <BiChevronRightCircle size={40} style={{color:"#2BE7E8"}}/>
            </div>
            </button>

            <div>
            <button className="btnClose"  onClick={() => {update(elemento.id, elemento.name)} }><MdDeleteForever size={20} style={{color:"red", marginTop:"75px", marginRight:"3px"}}/></button>
            </div>
            </div>
          
        )})
      }
        <div className="col-12 mt-2">
        <div className="row">
        <button className="btnClose" onClick={() => { closeRoutine()} }>Close <AiOutlineCloseCircle size={20} style={{color:"#fff"}} /></button>
        </div>
        </div>
        </CardPet> 
        </div>
       
      
      
      : <></>}  
      </div>
      
        
      
 
      <Modal isOpen={abierto}>
      <ModalHeader>
      <Row>
      <Col md="1">
      <button className="close" onClick={()=>{funcionModal(false)}}><AiOutlineCloseCircle  size={21} style={{ color:'black' }} /></button>
      </Col>
      <Col md="11">
      <h4 className="title-modal">{nameRoutine}</h4>
      </Col>
      </Row>
      </ModalHeader>
      <ModalBody>
      <Row>
      <Col md="12" className="routines-filter">
      <ReactPlayer className="video-modal w-100" url={videoRoutine} playing loop/>
      </Col>
      </Row>
      </ModalBody> 
      <ModalFooter>
      </ModalFooter>
      </Modal>
     </> 
          
         

  )
}

export default MyRoutine;