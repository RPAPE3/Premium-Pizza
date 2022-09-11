import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Auth from "../../utils/auth";
import Logo from "../../assets/images/Logo.png";

const NavBar = () => {
  return (
    <>
    <Container fluid="true">
    
      <Row className="row justify-content-between" style={{background: "orange",}}>

      <Col sm={10} className="text-center">
                <div>
                  <Image style={{width: "12vh", marginLeft: "15%", marginBottom: "1vh", marginTop: "1vh"}} fluid="true" src={Logo}/>
                </div>
                
                <h3 style={{marginLeft: "15%"}}>Premium Pizza</h3>
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
                        backgroundColor: "#a64dff",
                        borderColor: "black",
                        boxShadow: "5px 5px grey",
                        color: "white",
                      }}
                    >
                      {/* this is not using the Link component to logout or user and then refresh the application to the start */}
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
      </Row>
    
     </Container>
     </>
  )
};

export default NavBar;