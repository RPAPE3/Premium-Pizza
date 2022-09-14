import React from "react";
import Image from "react-bootstrap/Image";
import { useMutation } from '@apollo/client';

import Default from "../../assets/images/Default.png";
import { DELETE_PIZZA } from '../../utils/mutations';

const Vegetarian = ({ categories, test }) => {

  const [deletePizza, { error }] = useMutation (DELETE_PIZZA);

  const handleRemoveTopping = async (id) => {
    try {
      const { data } = await deletePizza({
        variables: { id }
      });
      refreshComponent()
    } catch (err) {
      console.error(err)
    }
  };

  function refreshComponent() {
      window.location.reload(false);
    };

 

    function filterToppings () {

      return categories.filter(
        (category) => category.name === "Vegetarian"
      )
    }
  
  
  return (
    <>
    {filterToppings().map((category) => (
      <h2> {category.name} </h2>
    ))}
      {filterToppings().map((category) => 
          category.pizzas.map((pizza) => ( 
           
            <div key={pizza._id} className="col my-5 card mx-auto" style={{maxWidth: 200}} >
            <Image src={Default} style={{ maxWidth: "50%", marginLeft: "25%" }} className=" card-img-top" alt="default place holder image" />
            <div className="card-body text-start">
              <h5 className="card-title text-center">{pizza.pizzaName}</h5>
              <ul>
              {pizza.toppings.map((topping) => (
                                <li>{topping.name}</li>
                            ))}
                            </ul>
            </div>
            <button className="btn btn-primary" onClick={() => handleRemoveTopping(pizza._id)}>Delete</button>
                        {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
          </div>
          ))
        )} 
        
    </>
  );
};

export default Vegetarian;