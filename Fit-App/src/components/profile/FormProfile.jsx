import { useNavigate } from 'react-router';
import {listaEjercicios} from '../../Redux/Actions/readAction1';
import { useSelector, useDispatch } from 'react-redux';
import React, {useState, useEffect} from 'react';
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input2,Input1, InputContainer, InputModal, InputGroup, InputLabel } from '../../styles/PagIntro'
import {TextIntro2, Container1, Container2, Buttonfilter, ButtonHome, ButtonLink, ButtonIntro2} from "../../styles/PagIntro"
import './profile.css';
import {Badge,  Card, Navbar, Nav, Table, Container, Row, Col,  OverlayTrigger, Tooltip} from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import {db, app} from '../../firebase';
import { getAuth, deleteUser } from "firebase/auth";
import{BiEditAlt} from "react-icons/bi"
import {AiOutlineCloseCircle} from "react-icons/ai"
import { Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import { registerUser, listaData } from '../../Redux/Actions/userAction';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

export const FormProfile = () => {
    const auth = getAuth(app);
    const user2 = auth.currentUser;
    const user  = useSelector( state => state.login )
    const id1=user.id;
    const dispatch = useDispatch();
 const {Data} = useSelector(state => state.readData)
  
const [abierto, setabierto]= useState(false)

const funcionModal = (valor) => {

setabierto(valor)

}

    const [gender, setGender]= useState('')
    const [name, setName]=useState('')
    const [age, setAge] = useState('')
    const [bfp, setBfp] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [foto, setImage] = useState('')
  

    const DatosUser = async (e) => {
      e.preventDefault()
      

      dispatch(registerUser({name: name, gender: gender, age: age, height: height, weight: weight, bfp: bfp, }, id1))
      MySwal.fire({
        title: <strong>Good job!</strong>,
        html: <i>Welcome Back</i>,
        icon: 'success'
      })
      // navigate('/home1');
      }


    useEffect(() => {
      dispatch( listaData(id1))
       },[dispatch])


     const deleteU = async() => {
      
      await deleteUser(user2)
      
    }
  return (

    
<div className="col-12 form-profile1">
   
   
    <div className="checkout">
    <div className="checkout1">
    <h2>Profile Data</h2>
    <button className="button-edit" onClick={()=>{funcionModal(true)}}><BiEditAlt size={27}/></button>
    </div>
    <div className="checkout2">
    <h5>Name</h5>
    <h5>hhhh</h5>
    </div>
    <div className="checkout2">
    <h5>Gender</h5>
    <h5>hhh</h5>
    </div>
    <div className="checkout2">
    <h5>Age</h5>
    <h5>hhh</h5>
    </div>
    <div className="checkout2">
    <h5>Height</h5>
    <h5>hhh</h5>
    </div>
    <div className="checkout2">
    <h5>Weight</h5>
    <h5>hhh</h5>
    </div>
    <div className="checkout3">
    <h5>BFP%</h5>
    <h5>hhh</h5>
    </div>
   
    </div>
    <button className="deletep" onClick={()=>{deleteU()}}>Delete Account</button>
  
    
    <Modal isOpen={abierto}>
    <ModalHeader>
    <button onClick={()=>{funcionModal(false)}} Style="background:none; border:none;color:black"><AiOutlineCloseCircle size={20}/></button>
    </ModalHeader>
    <ModalBody>
    <form className="form-profilem"onSubmit={DatosUser}>
    
    <div className="col-12">
    <div className="container d-flex genp">  
    <h6 className="inputworkp">Name</h6>
    <Input2 type="text" name="name"   onChange={(e) => setName(e.target.value)} placeholder="your name"/>
    </div>
    </div>

    <div className="col-12">
   
    <div className="genp1">
    <h5>Gender</h5>
    <div className="box5">
    <label className="radio-button">
  <input value="Male"  onChange={(e) => setGender(e.target.value)}  name="example-radio" type="radio"/>
  <span className="radio"></span>
  <h6 className="gender">MALE</h6>
</label>

<label className="radio-button">
  <input value="Female"  onChange={(e) => setGender(e.target.value)}  name="example-radio" type="radio"/>
  <span className="radio"></span>
<h6 className="gender">FEMALE</h6>
</label>
</div>
</div>
</div>
   

    <div className="col-12">
    <div className="d-flex genp1">  
    <h6 className="inputworkp">Age</h6>
    <Input2 type="text" name="name"   onChange={(e) => setAge(e.target.value)} placeholder="Age"/>
    </div>
    </div>

    <div className="col-12">
    <div className="d-flex genp">  
    <h6 className="inputworkp">Height</h6>
    <Input2 type="text" name="name"   onChange={(e) => setHeight(e.target.value)} placeholder="Height"/>
    </div>
    </div>

    <div className="col-12">
    <div className="container d-flex genp">  
    <h6 className="inputworkp">Weight</h6>
    <Input2 type="text" name="name"   onChange={(e) => setWeight(e.target.value)} placeholder="Weight"/>
    </div>
    </div>

    <div className="col-12">
    <div className="container d-flex genp">  
    <h6 className="inputworkp">bfp%</h6>
    <Input2 type="text" name="name"   onChange={(e) => setBfp(e.target.value)} placeholder="Body Fat Percentage"/>
    </div>
    </div> 
    <ModalFooter>
    <button className="deletep" type="submit" onClick={()=>{DatosUser()}}>Add Data</button>
    </ModalFooter>
</form>
    </ModalBody>
    
    </Modal>
   </div>    
   
   
  
  )
}

export default FormProfile