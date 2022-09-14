import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";
import Logo from "../../assets/images/Logo.png";

const NavBar = () => {
  return (
    <>
    
    <Container fluid="true">
    
      <Row className="row justify-content-between" style={{background: "#FBD412"}}>

      {Auth.loggedIn() ? (

        <>
      <Col sm={10} className="text-center">
                <div>
                  <Image style={{width: "12vh", marginLeft: "15%", marginBottom: "1vh", marginTop: "1vh"}} fluid="true" src={Logo}/>
                </div>
                
                <Link to="/"> <h3 style={{marginLeft: "15%", fontFamily: "Segoe Print", fontWeight: "bold", fontSize: 50, color: "black"}}>Premium Pizza</h3> </Link>
                </Col>
                <Col sm={2}>
                
                  <div className="text-center" style={{marginLeft: "15%"}}>
                    <button
                      type="button"
                      className="btn mt-4"
                      style={{
                        width: "20vh",
                        borderStyle: "solid",
                        marginTop: "2vh",
                        backgroundColor: "#A19B9B",
                        borderColor: "black",
                        boxShadow: "5px 5px grey",
                        color: "white",
                      }}
                    >
                      <a
                        href="/"
                        style={{ color: "white" }}
                        onClick={() => Auth.logout()}
                      >
                        Logout
                      </a>
                    </button>
                  </div>
            </Col>
            </>

) : (
  <>
  <Col sm={10} className="text-center">
                <div>
                  <Image style={{width: "12vh", marginLeft: "15%", marginBottom: "1vh", marginTop: "1vh"}} fluid="true" src={Logo}/>
                </div>
                
                <Link to="/"> <h3 style={{marginLeft: "15%", fontFamily: "Segoe Print", fontWeight: "bold", fontSize: 50, color: "black"}}>Premium Pizza</h3> </Link>
                </Col>
                <Col sm={2}>
            </Col>
            </>
)}
      </Row>
    
     </Container>
     </>
  )
};

export default NavBar;