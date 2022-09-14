import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { useMutation } from '@apollo/client';

import { CREATE_TOPPING } from '../../utils/mutations';

const CreateTopping = () => {
  //ADD NEW TOPPING FORM AND LOGIC

  //TAKES USER INPUTS AND SETS THE VALUE
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [categoryName, setCategoryName] = useState("")

  //CALLS ON CREATE_TOPPING MUTATION TO ADD NEW TOPPING TO DATABASE
  const [addTopping, { err }] = useMutation(CREATE_TOPPING);

  //PROVIDES CREATE_TOPPING MUTATION WITH NEEDED INFO
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addTopping({
        variables: {
          name: name,
          quantity: quantity,
          categoryName: categoryName,
        },
      });

      setName("");
      setQuantity("");
      setCategoryName("");
    } catch (err) {
      console.error(err);
    }
  };

  //RETRIEVES USER INPUT AND ASSIGNS THEM TO THE USESTATE
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    if (name === "name") {
      setName(value);
    } else if (name === "quantity") {
      setQuantity(value);
    } else if (name === "categoryName") {
      setCategoryName(value);
    }
  };

  //ASSIST WITH THE COLLAPSE FUNCTION OF THE ADD TOPPING FORM
  const [open, setOpen] = useState(false);

  //REFRESH PAGE AFTER SUBMITTING NEW TOPPING
  function refreshComponent() {
    window.location.reload(false);
  };

  //ADD TOPPING FORM
  return (
    <>

      <Button
        className="fs-5"
        style={{height: "50px", width: "50%", marginTop: "10px", backgroundColor: "#2EBF01", color: "white", marginBottom: "10px", boxShadow: "5px 5px black",}}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Add Topping
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" style={{ marginLeft: "25%", width: "100%" }}>
          <form
            style={{ width: "50%",backgroundColor: "#FBD412" }}
            onSubmit={handleFormSubmit}
          >
            <div className="form-group border border-dark p-3 mb-2 text-dark text-center collpase">
              <div>
                <textarea
                  name="name"
                  className="form-input"
                  style={{ height: "50px", marginBottom: "1%"}}
                  placeholder="Topping Name"
                  value={name}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <input
                  name="quantity"
                  className="form-input"
                  type="number"
                  style={{ height: "50px", marginBottom: "1%" }}
                  placeholder="quantity of Toppings"
                  value={quantity}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <select name="categoryName" className="form-input" aria-label="Default select example" onChange={handleChange}>
                  <option defaultValue>Type of Topping</option>
                  <option name="test" value="Meats">Meats</option>
                  <option name="Veggies" value="Veggies">Veggies</option>
                  <option name="categoryName" value="Cheese">Cheese</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              onClick={refreshComponent}
              className="btn btn-primary p-3 mb-4 text-white"
              style={{width: "50%", borderStyle: "solid", borderColor: "black", marginTop: "2vh", backgroundColor: "#2EBF01", boxShadow: "5px 5px grey", color: "white"}}>
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

export default CreateTopping;