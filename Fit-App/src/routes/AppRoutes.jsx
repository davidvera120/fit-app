import { ChakraProvider } from '@chakra-ui/react';
import '../Global.css'
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Workouts from '../components/workouts/Workouts';
import {ModalWorkoutsGroups} from '../components/modals/ModalWorkoutsGroups';
import Prueba from '../components/Prueba';

import {LogIn} from '../components/auth/LogIn';
import {SingUp} from '../components/auth/SingUp';
import {Home1} from '../pages/Home1';
import {Home} from '../pages/Home';
import {CreateRoutine} from '../components/createdRoutines/CreateRoutine';
import "bootstrap/dist/css/bootstrap.min.css";
import { CreateWorkout } from '../components/createdWorkouts/CreateWorkout';

import Profile from '../pages/Profile';
import {ModalEdit} from '../components/editworkout/ModalEdit';
import {NewWork} from '../pages/NewWork';
import { loginProvider } from "../Redux/Actions/userAction";
import { useDispatch } from "react-redux";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase"
import { ViewAgendaTwoTone } from '@mui/icons-material';



 export const AppRoutes =() => {
    const [auth1, setAuth] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
       
        onAuthStateChanged( auth, (user) => {
            if (user?.uid) {
                dispatch(loginProvider(user.uid,user.displayName, user.email, user.photoURL))
                setAuth(true)
                console.log(user)
            } else {
                setAuth(false)
            }
        })
    }, [dispatch, setAuth])


        return (
         
           
            <BrowserRouter forceRefresh={true}>
                    <Routes>
               
                    <Route path='/login' element={<PublicRoutes isAutentication={auth1}> <LogIn /> </PublicRoutes>} />
                    <Route path='/singup' element={<PublicRoutes isAutentication={auth1}> <SingUp /> </PublicRoutes>} />
                   
                    <Route path="/home" element={<PublicRoutes isAutentication={auth1}><Home /></PublicRoutes>} />
                 

                       
                        <Route path="/new" element={<PrivateRoutes isAutentication={auth1}><NewWork /></PrivateRoutes>} />
                        <Route path="/workouts" element={<PrivateRoutes isAutentication={auth1}><Workouts/></PrivateRoutes>} />
                        <Route path="/workg/:id" element={<PrivateRoutes isAutentication={auth1}><ModalWorkoutsGroups/></PrivateRoutes>} />
                        <Route path="/editwork/:id" element={<PrivateRoutes isAutentication={auth1}><ModalEdit/></PrivateRoutes>} />
                        <Route path="/prueba" element={<PrivateRoutes isAutentication={auth1}><Prueba/></PrivateRoutes>} />
                        <Route path='/home1' element={<PrivateRoutes isAutentication={auth1}><Home1/></PrivateRoutes>} />
                        
                        <Route path="/profile" element={<PrivateRoutes isAutentication={auth1}><Profile/></PrivateRoutes>} />
                        <Route path="/create1" element={<PrivateRoutes isAutentication={auth1}><CreateRoutine/></PrivateRoutes>} />
                        <Route path="/create2" element={<PrivateRoutes isAutentication={auth1}><CreateWorkout/></PrivateRoutes>} />
                        
                     <Route path="/" element={<Home />} />
                       
                   
               
                    </Routes>

           </BrowserRouter>
                       
          
    );
    }
     export default AppRoutes;