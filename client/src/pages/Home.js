import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Auth from "../utils/auth";
import NavBar from '../components/NavBar'
import Owner from '../pages/Owner';
import Chef from '../pages/Chef';

// import UserProfile from "../components/UserProfile";
// import UserFeed from "../components/UserFeed";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import logo from "../assets/img/logo.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";

import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <Container fluid="true">
      <Row className="row justify-content-between">
        
      {Auth.loggedIn() ? (
        <>
        <NavBar />

        <Owner />
        </>
        ) : (
          <>
            <Col sm={6} style={{background: 'grey'}}>
            <h1> Premium Pizza</h1>
        </Col>
        <Col sm={6} style={{background: 'grey'}}>
            <div>
            <Link to="/Login">
                <Button style={{width: "20vh", borderStyle: "solid", borderColor: "black", marginTop: "2vh", backgroundColor: "#a64dff", boxShadow: "5px 5px grey", color: "white"}} variant="warning"> Owner </Button>
            </Link>
            </div>

            <div>
            <Link to="/chef">
                <Button style={{width: "20vh", borderStyle: "solid", borderColor: "black", marginTop: "2vh", backgroundColor: "#a64dff", boxShadow: "5px 5px grey", color: "white"}} variant="warning"> Chef </Button>
            </Link>
            </div>
        </Col>
          </>
        )}
        
          
      </Row>
    </Container>
  );
};

export default Home;


{/* <Col sm={6} style={{background: 'grey'}}>
            <h1> Premium Pizza</h1>
        </Col>
        <Col sm={6} style={{background: 'grey'}}>
            <div>
            <Link to="/Login">
                <Button style={{width: "20vh", borderStyle: "solid", borderColor: "black", marginTop: "2vh", backgroundColor: "#a64dff", boxShadow: "5px 5px grey", color: "white"}} variant="warning"> Owner </Button>
            </Link>
            </div>

            <div>
            <Link to="/Chef">
                <Button style={{width: "20vh", borderStyle: "solid", borderColor: "black", marginTop: "2vh", backgroundColor: "#a64dff", boxShadow: "5px 5px grey", color: "white"}} variant="warning"> Chef </Button>
            </Link>
            </div>
        </Col> */}