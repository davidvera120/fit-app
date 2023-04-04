
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import { ButtonIntro, ImgIntro, TextIntro, Singupfrm, Label, Input1, InputContainer, ButtonIntro1, Body, CardBoard } from '../../styles/PagIntro'
import logog from '../../images/logog.png'
import logofb from '../../images/logofb.png'
import logofit from '../../images/logofit.png'
import portada from '../../images/portada.png'
import Image from '../../styles/PagIntro'
import { loginGoogle, LoginWithEmail } from "../../Redux/Actions/userAction";
import { useDispatch } from "react-redux";
import './auth.css'
import {Badge, Button, Card, Navbar, Nav, Table, Container, Row, Col, Form, OverlayTrigger, Tooltip} from "react-bootstrap";

export function LogIn() {



  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();


    const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });


    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(LoginWithEmail(user.email, user.password, user.uid))
    
  }

  const handleGoogle = () => {
      dispatch(loginGoogle())
  }

  // const { login, loginWithGoogle, resetPassword, singInWithFacebook } = useAuth();
  // const [error, setError] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //     await login(user.email, user.password);
  //     navigate("/home1");
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };




  // const handleGoogleSignin = async () => {
  //   try {
  //     await loginWithGoogle();
  //     navigate("/home1");
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // const handleFacebookSignin = async () => {
  //   try {
  //     await singInWithFacebook();
  //     navigate("/home1");
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // const handleResetPassword = async (e) => {
  //   e.preventDefault();
  //   if (!user.email) return setError("Write an email to reset password");
  //   try {
  //     await resetPassword(user.email);
  //     setError('We sent you an email. Check your inbox')
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  return (

    <Container fluid className="background-auth">
   <Row>
    
 <Col md="12" className="general-auth mt-5">
 <img className="img-auth1 mb-5 mt-3" src={logofit} alt="logo"/>
 <h3>Welcome Back</h3>
 <span>Sing in to an existing account using your Email</span>
 </Col>
 
    <Col md="12" className="general-auth mt-4">
      <Form onSubmit={handleSubmit}>
      <Col md="12" className="card-auth">
      <h6 className="label1-auth">Email:</h6>
      <input className="input1" type="email" name="email"  onChange={handleChange} placeholder="youremail@gmail.com"/>
      </Col>

      <Col md="12" className="card-auth mt-2">
      <h6 className="label1-auth">Password:</h6>
      <input className="input1" type="password" name="password" onChange={handleChange} placeholder="*************"/>
      </Col>
      <Col md="12" className="mt-4">
      <ButtonIntro1  type="submit">
      sing in       
      </ButtonIntro1>
      </Col> 
     
      </Form>
      </Col>
      
<Col md="12" className="general-auth mt-2">
 Forgot Password? 
</Col>   

      <Col md="12" className="general-auth mt-3">
      <h4>Sing In With</h4>
      <div className="logos">

      <button className="btn-auth">
      <img className="img-auth" src={logofb} alt="logo"/>
      </button>
     <span className="sep">|</span>
      <button className="btn-auth" onClick={handleGoogle}>
      <img className="img-auth" src={logog} alt="logo"/>
      </button>
      </div>
      </Col>
      
      <Col md="12" className="mt-4">
      <div className="d-flex general-auth">
      Dont have account?
      <Link to="/singup" className="link-singup">
        Sing up
      </Link>
      </div>
      </Col>
     
    </Row>
    </Container>
   
    
  );
}