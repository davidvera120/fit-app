import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const PublicRoutes =({isAutentication, children})=>{
   
    return !isAutentication
    ? children
    : <Navigate to='/home1' />
}