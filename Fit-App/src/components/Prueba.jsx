
import React, { useState, useEffect} from 'react';
import NavBar from './navbars/NavBar';
import { ButtonIntro1, Container1} from '../styles/PagIntro'
import  ButtonNavBar  from './navbars/ButtonNavBar';
import { useParams } from 'react-router-dom';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import {storage} from '../firebase'
import { Sync } from '@mui/icons-material';

export const Prueba = () => {

const [file, setFile]= useState('');
const [file2, setFile2]= useState('');
const [foto, setImage] = useState('');
    const [video, setVideo] = useState('');
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);

async function uploadImage (file){
const storageRef=ref(storage, 'workout');
setLoading1(true)
await uploadBytes(storageRef, file);

const url = await getDownloadURL(storageRef);
return url;
}



  const uploadImage1 = async (e) => {
   e.preventDefault();
   const file=e.target.files[0];
   try{ 
   const result = await uploadImage(file);
   console.log(result);
   setLoading1(false)
   setImage(result)
   console.log(file2)
   }catch(error){
    console.error(error)
   }
  }



  const uploadImage2 = async (e) => {
    e.preventDefault();
    setFile(e.target.files[0])
    try{ 
    const result = await uploadImage(file);
    console.log(result);
    setLoading1(false)
    setImage(result)
    console.log(file2)
    }catch(error){
     console.error(error)
    }
   }
  return (
    <div className="col-12">
<div className="container">
<NavBar/>

<form onSubmit={uploadImage2}>

<div className="col-12 mb-3">
<div className="container d-flex general1" Style="margin-top:80px">
<input id="fileSelector" type="file" name="file" onChange={uploadImage1} />
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
<img src={foto} Style={{width:'50px'}}/>
</div>
</div>
)}
<button  className="custom-btn btn-1 mt-4"  type="submit">

Save Workout

</button>

</form>
<img src="https://firebasestorage.googleapis.com/v0/b/auth-test-app-8a172.appspot.com/o/adiestramiento.jpeg?alt=media&token=740314e2-d6a9-4d87-a314-116462ea9336" />
<ButtonNavBar />

</div>
</div>
  )
}
export default Prueba;
