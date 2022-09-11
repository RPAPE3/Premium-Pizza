import React from "react";
import { QUERY_ALL_CATEGORIES } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MeatLovers from '../components/MeatLovers';
import Vegetarian from '../components/Vegetarian'
import Specialty from '../components/Specialty'

const Chef = () => {

  const { loading, data } = useQuery(QUERY_ALL_CATEGORIES);

  const categories = data?.categories || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
    <h1>Pizzas</h1>
    <Container className=" text-center"fluid="true" >
    <Row className= "row align-items-center justify-content-evenly" style={{backgroundColor: "grey"}}>
    <Col
          sm={4}
          style={{ background: "orange" }}
          // className="d-flex flex-grow-1"
        >
            <MeatLovers
            categories={categories}
            test={categories.name}
             />
       
        </Col>
        <Col
          sm={4}
          style={{ background: "grey" }}
          // className="d-flex flex-grow-1"
        >
          
            <Vegetarian
            categories={categories}
            test={categories.name}
             />
        
        </Col>
        <Col
          sm={4}
          style={{ background: "orange" }}
          // className="d-flex flex-grow-1"
        >
            <Specialty
            categories={categories}
            test={categories.name}
             />
       
        </Col>
    </Row>
    </Container>
    </>
  );
};

export default Chef;