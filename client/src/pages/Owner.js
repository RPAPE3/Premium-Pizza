import React from "react";
import { QUERY_ALL_CATEGORIES } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import NavBar from '../components/NavBar'
import CreateTopping from "../components/CreateTopping"
import MeatsToppings from '../components/MeatsToppings';
import VeggiesToppings from '../components/VeggiesToppings'
import CheeseToppings from '../components/CheeseToppings'

const Owner = () => {

  const { loading, data } = useQuery(QUERY_ALL_CATEGORIES);

  const categories = data?.categories || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
    <NavBar />
    <Link to="/chef"><h1>Chef's Page</h1></Link>

    <Container className="container text-center">
    <CreateTopping />
    <Row className= "row justify-content-evenly " style={{backgroundColor: "orange", boxShadow: "5px 5px black", marginTop: "1%"}}>
      <MeatsToppings 
      categories={categories}
      test={categories.name}
      />
      </Row>
      <Row className= "row justify-content-evenly" style={{backgroundColor: "#FDFEC2", boxShadow: "5px 5px black", marginTop: "1%"}}>
      <VeggiesToppings 
      categories={categories}
      test={categories.name}
      />
    </Row>
    <Row className= "row justify-content-evenly" style={{backgroundColor: "orange", boxShadow: "5px 5px black", marginTop: "1%", marginBottom: "1%"}}>
      <CheeseToppings 
      categories={categories}
      test={categories.name}
      />
    </Row>
    </Container>
    </>
  );
};

export default Owner;