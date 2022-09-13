import React from "react";
import Image from "react-bootstrap/Image";
import { useMutation } from '@apollo/client';

import Default from "../../assets/images/Default.png";
import { DELETE_TOPPING } from '../../utils/mutations';


const CheeseToppings = ({ categories, test }) => {

  const [deleteTopping, { error }] = useMutation (DELETE_TOPPING);

  const handleRemoveTopping = async (id) => {
    try {
      const { data } = await deleteTopping({
        variables: { id }
      })
      refreshComponent()
    } catch (err) {
      console.error(err)
    }
  };
 
  function refreshComponent() {
    window.location.reload(false);
  }

    function filterToppings () {

      

      return categories.filter(
        (category) => category.name === "Cheese"
      )
    }
  
  
  return (
    <>
    {filterToppings().map((category) => (
      <h2 key={category.name}> {category.name} </h2>
    ))}
      {filterToppings().map((category) => 
          category.toppings.map((topping) => ( 
           
            <div key={topping._id} className="col-3 my-5 mx-5 card" >
            <Image src={Default} style={{ maxWidth: "50%", marginLeft: "25%" }} className=" card-img-top" alt="default place holder image" />
            <div className="card-body">
              <h5 className="card-title">{topping.name}</h5>
              
              <button className="btn btn-primary" onClick={() => handleRemoveTopping(topping._id)}>Delete</button>
            </div>
            {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
          </div>
          ))
        )}
    </>
  );
};

export default CheeseToppings;