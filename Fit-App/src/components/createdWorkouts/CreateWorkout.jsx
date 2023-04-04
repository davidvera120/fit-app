
import ButtonNavBar from '../navbars/ButtonNavBar';
import NavBar from '../navbars/NavBar';
import React, { useState, useEffect} from 'react';
import { ButtonIntro1, TextIntro, Singupfrm,Select1, Form, Label, Input2, InputContainer, InputContainer1, Buttonfilter, Cardwork } from '../../styles/PagIntro'
import ReactPlayer from "react-player";
import { addWorkout } from '../../Redux/Actions/CreateWorkAction';
import { useSelector, useDispatch } from 'react-redux';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import {storage} from '../../firebase'
import { v4 as uuidv4 } from 'uuid';
import { SettingsSuggestOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import './createdWorkouts.css';
import withReactContent from 'sweetalert2-react-content';
import {Badge, Card, Navbar, Nav, Table, Container, Row, Col, OverlayTrigger, Tooltip} from "react-bootstrap";
const MySwal = withReactContent(Swal);




export const CreateWorkout = () => {

  const user  = useSelector( state => state.login )
  console.log(user)
  const id1=user.id; 
  const navigate = useNavigate();
    const [name, setName]=useState('')
    const [categoria, setCategoria] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [foto, setImage] = useState('')
    const [video, setVideo] = useState('')
    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [ruta2, setRuta2]= useState('');
    // const [file2, setFile2]= useState('');

    const dispatch = useDispatch();
    


async function uploadImage (file){
 const uid=uuidv4();
 const ruta=`${id1}/${uid}`;
setRuta2(uid);
setLoading1(true);
  const storageRef=ref(storage, ruta);
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

  //   const deleteImage = async (e) => {
  //     e.preventDefault();
  //       cloudinary.v2.uploader.destroy("ejow3dn53fd309wlyc3h", function(error,result) {
  //         console.log(result, error) })
  //         .then(resp => console.log(resp))
  //         .catch(_err=> console.log("Something went wrong, please try again later."));
  // }

    // const uploadImage1 = async (e) => {
    //     const files=e.target.files;
    //     const data=new FormData();
    //     data.append('file', files[0])
    //     data.append('upload_preset','fileHuellitas')
    //     setLoading1(true)
       

    //     const res=await fetch('https://api.cloudinary.com/v1_1/doshr4fpd/image/upload',
    //       {
    //         method:'POST',
    //         body:data
    //       }
    //     )
    //     const file=await res.json()
    //     console.log(res)
    //     setImage(file.secure_url)
      
    //     console.log(foto)
    //     setLoading1(false)
        
    //   }


      // const uploadImage2 = async (e) => {
      //   const files=e.target.files;
      //   const data=new FormData();
      //   data.append('file', files[0])
      //   data.append('upload_preset','fileHuellitas')
      //   setLoading2(true)
       

      //   const res=await fetch('https://api.cloudinary.com/v1_1/doshr4fpd/video/upload',
      //     {
      //       method:'POST',
      //       body:data
      //     }
      //   )
      //   const file=await res.json()
      //   console.log(res)
      //   setVideo(file.secure_url)
      //   console.log(foto)
      //   setLoading2(false)
       
      // }
      const NewWorkout = async (e) => {
        e.preventDefault()
        
        dispatch(addWorkout({name: name, categoria: categoria, descripcion: descripcion, video: video, foto: foto, ruta: ruta2}, id1));
        MySwal.fire({
          title: <strong>Good job!</strong>,
          html: <i>Welcome Back</i>,
          icon: 'success'
        }) 
        navigate('/create2');
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

  return (
    
    <Container fluid className="background">
    <Row>
    <NavBar />
  

    <Form onSubmit={NewWorkout}>
  
    <div className="col-12">
    <div className="container d-flex general1" Style="margin-top:170px;">  
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

  
<button  className="custom-btn btn-1 mt-4"  type="submit">

Save Workout

</button>

  </Form>
 
    <ButtonNavBar />

    </Row>
    </Container>
  )
}

export default CreateWorkout