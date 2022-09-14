import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { useMutation } from '@apollo/client';

import { CREATE_PIZZA } from '../../utils/mutations';

const CreatePizza = ({ categories }) => {
  //ADD NEW Pizza

  //TAKES USER INPUTS AND SETS THE VALUE
  const [pizzaName, setPizzaName] = useState("");
  const [id, setId] = useState("");
  const [categoryName, setCategoryName] = useState("")

  //CALLS ON CREATE_PIZZA MUTATION TO ADD NEW PIZZA TO DATABASE
  const [addPizza, { err }] = useMutation(CREATE_PIZZA);

  //PROVIDES CREATE_PIZZA MUTATION WITH NEEDED INFO
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPizza({
        variables: {
          pizzaName: pizzaName,
          id: id,
          categoryName: categoryName,
        },
      });

      setPizzaName("");
      setId("");
      setCategoryName("");
    } catch (err) {
      console.error(err);
    }
  };

  //RETRIEVES USER INPUT AND ASSIGNS THEM TO THE USESTATE
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    if (name === "pizzaName") {
      setPizzaName(value);
    } else if (name === "topping") {
      setId(value);
    } else if (name === "categoryName") {
      setCategoryName(value);
    }
  };

  //ASSIST WITH THE COLLAPSE FUNCTION OF THE ADD PIZZA FORM
  const [open, setOpen] = useState(false);

  //REFRESH PAGE AFTER SUBMITTING NEW PIZZA
  function refreshComponent() {
    window.location.reload(false);
  };

  //RETRIEVES ONLY MEATS TOPPINGS
  function meatLoversToppings() {

    return categories.filter(
      (category) => category.name === "Meats"
    )
  };

  //RETRIEVES ONLY VEGGIE TOPPINGS
  function vegetarianToppings() {

    return categories.filter(
      (category) => category.name === "Veggies"
    )
  };

  //RETRIEVES ONLY CHEESE TOPPINGS
  function specialtyToppings() {

    return categories.filter(
      (category) => category.name === "Cheese"
    )
  };

  //ADD PIZZA FORM
  return (
    <>

      <Button
        className="fs-3"
        style={{
          height: "50px",
          width: "50%",
          marginTop: "10px",
          backgroundColor: "#2EBF01",
          color: "white",
          marginBottom: "10px",
          boxShadow: "5px 5px black",
        }}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Add Pizza
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" style={{ marginLeft: "25%", width: "100%" }}>
          <form
            style={{ width: "50%", backgroundColor: "#FBD412" }}
            onSubmit={handleFormSubmit}
          >
            <div className="form-group border border-dark p-3 mb-2 text-dark text-center collpase">
              <div>
                <textarea
                  name="pizzaName"
                  className="form-input"
                  style={{ height: "50px", marginBottom: "1%"}}
                  placeholder="Pizza Name"
                  value={pizzaName}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <select style={{ marginBottom: "1%" }} name="topping" className="form-input" aria-label="Default select example" onChange={handleChange}>
                  <option defaultValue>Choose a Starting Topping</option>
                  {meatLoversToppings().map((meatLovers) =>
                    meatLovers.toppings.map((topping) => (
                      <option value={topping._id}>{topping.name}</option>
                    ))
                  )};
                  {vegetarianToppings().map((vegetarian) =>
                    vegetarian.toppings.map((topping) => (
                      <option value={topping._id}>{topping.name}</option>
                    ))
                  )};
                  {specialtyToppings().map((specialty) =>
                    specialty.toppings.map((topping) => (
                      <option value={topping._id}>{topping.name}</option>
                    ))
                  )};
                </select>
              </div>
              <div>
                <select name="categoryName" className="form-input" aria-label="Default select example" onChange={handleChange}>
                  <option defaultValue>Type of Topping</option>
                  <option value="Meat Lovers">Meat Lovers</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Specialty">Specialty</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              onClick={refreshComponent}
              className="btn btn-primary p-3 mb-4 text-white"
              style={{
                width: "50%",
                borderStyle: "solid",
                borderColor: "black",
                marginTop: "2vh",
                backgroundColor: "#2EBF01",
                boxShadow: "5px 5px grey",
                color: "white",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </Collapse>
      {err && (
        <div className="my-3 p-3 bg-danger text-white">{err.message}</div>
      )}
    </>
  );
};

export default CreatePizza;