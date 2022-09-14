import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Auth from "../utils/auth";
import Owner from '../pages/Owner';
import NavBar from '../components/NavBar'

//LANDING PAGE FOR WHEN YOU ARE LOGGED IN OR NOT LOGGED IN
const Home = () => {

  return (
    <Container fluid="true" style={{ background: "#FCFED1", minHeight: "100vh" }}>
      <Row className="row justify-content-between">

        {Auth.loggedIn() ? (
          <Owner />
        ) : (
          <>
            <NavBar />
            <Col sm={6} style={{ marginTop: "10%" }} className="text-end">
              <div>
                <Link to="/Login">
                  <Button style={{ width: "40vh", borderStyle: "solid", borderColor: "black", marginTop: "2vh", backgroundColor: "#FA5C3D", boxShadow: "5px 5px grey", color: "white" }}> Owner Page </Button>
                </Link>
              </div>
            </Col>
            <Col sm={6} style={{ marginTop: "10%" }}>
              <div>
                <Link to="/chef">
                  <Button style={{ width: "40vh", borderStyle: "solid", borderColor: "black", marginTop: "2vh", backgroundColor: "#FA5C3D", boxShadow: "5px 5px grey", color: "white" }} variant="warning"> Chef Page </Button>
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