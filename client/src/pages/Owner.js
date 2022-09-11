import React from "react";
import { QUERY_ALL_CATEGORIES } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

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
    <h1>Toppings</h1>
    <Container className="container text-center">
    <Row className= "row align-items-center justify-content-evenly" style={{backgroundColor: "grey"}}>
      <MeatsToppings 
      categories={categories}
      test={categories.name}
      />
      </Row>
      <Row className= "row align-items-center justify-content-evenly" style={{backgroundColor: "grey", marginTop: "3%"}}>
      <VeggiesToppings 
      categories={categories}
      test={categories.name}
      />
    </Row>
    <Row className= "row align-items-center justify-content-evenly" style={{backgroundColor: "grey", marginTop: "3%"}}>
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