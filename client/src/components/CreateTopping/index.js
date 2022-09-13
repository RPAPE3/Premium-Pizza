import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { useMutation } from '@apollo/client';

import { CREATE_TOPPING } from '../../utils/mutations';

const CreateTopping = () => {
    //ADD NEW TOPPING

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [categoryName, setCategoryName] = useState("")

  const [addTopping, { err }] = useMutation(CREATE_TOPPING
  //   , {
  //   update(cache, { data: { addTopping } }) {
  //     try {
  //       const { topping } = cache.readQuery({ query: QUERY_TOPPING });

  //       cache.writeQuery({
  //         query: QUERY_TOPPING,
  //         data: { toppings: [addTopping, ...topping] },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }

  //     const { category } = cache.readQuery({ query: QUERY_ALL_CATEGORIES });
  //     cache.writeQuery({
  //       query: QUERY_ALL_CATEGORIES,
  //       data: { categories: { ...category, toppings: [...category.toppings, addTopping] } },
  //     });
  //   },
  // }
  );

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

  const [open, setOpen] = useState(false);

  function refreshComponent() {
    window.location.reload(false);
  };

  return (
    <>

      <Button
          className="fs-3"
          style={{
            height: "100px",
            width: "100%",
            marginTop: "10px",
            backgroundColor: "#a64dff",
            color: "white",
            marginBottom: "10px",
            boxShadow: "5px 5px black",
          }}
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Click me to post an event!
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <form
              style={{ width: "100%", backgroundColor: "gray" }}
              onSubmit={handleFormSubmit}
            >
              <div className="form-group border border-dark p-3 mb-2 text-dark text-center collpase">
                <div>
                  <textarea
                    // name="text"
                    name="name"
                    // class="form-control"
                    className="form-input"
                    style={{ height: "100px" }}
                    placeholder="Topping Name"
                    value={name}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div>
                  <input
                    // name="text"
                    name="quantity"
                    // className="form-control"
                    className="form-input"
                    // type="number" step="1"
                    type="number"
                    style={{ height: "100px" }}
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
                style={{
                  width: "50%",
                  marginLeft: "26%",
                  borderStyle: "solid",
                  borderColor: "black",
                  marginTop: "2vh",
                  backgroundColor: "#a64dff",
                  boxShadow: "5px 5px grey",
                  color: "white",
                }}
              >
                Post Event!
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