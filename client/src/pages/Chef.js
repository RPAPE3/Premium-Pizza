import React from "react";
import { QUERY_ALL_CATEGORIES } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import NavBar from '../components/NavBar'
import CreatePizza from '../components/CreatePizza'
import MeatLovers from '../components/MeatLovers';
import Vegetarian from '../components/Vegetarian';
import Specialty from '../components/Specialty';

const Chef = () => {

  const { loading, data } = useQuery(QUERY_ALL_CATEGORIES);

  const categories = data?.categories || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <Container className=" text-center" fluid="true" >
        <CreatePizza 
         categories={categories}
        />
        <Row className="row  justify-content-evenly" style={{ backgroundColor: "grey" }}>

          <Col sm={4} style={{ background: "orange" }} className="">
            <MeatLovers
              categories={categories}
              test={categories.name}
            />
          </Col>

          <Col sm={4} style={{ background: "#FDFEC2" }} className="">
            <Vegetarian
              categories={categories}
              test={categories.name}
            />

          </Col>

          <Col sm={4} style={{ background: "orange" }} className="">
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