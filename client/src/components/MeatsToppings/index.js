import React from "react";
import Image from "react-bootstrap/Image";
import { useMutation } from '@apollo/client';

import Default from "../../assets/images/Default.png";
import { DELETE_TOPPING } from '../../utils/mutations';


const MeatsToppings = ({ categories, test }) => {

  //DELETE A MEATS TOPPING
  const [deleteTopping, { error }] = useMutation(DELETE_TOPPING);

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

  //REFRESH PAGE AFTER DELETE BUTTON IS CLICKED
  function refreshComponent() {
    window.location.reload(false);
  };

  //DISPLAY ONLY MEATS TOPPINGS 
  function filterToppings() {

    return categories.filter(
      (category) => category.name === "Meats"
    )
  };

  //DISPLAY ALL MEAT CATEGORY TOPPINGS FROM DATABASE
  return (
    <>
      {filterToppings().map((category) => (

        <h2 key={category.name}> {category.name} </h2>

      ))}
      {filterToppings().map((category) =>
        category.toppings.map((topping) => (

          <div key={topping._id} className="mt-3 mx-5 card max-auto" style={{ maxWidth: 225 }}>
            <Image src={Default} style={{ maxWidth: "50%", marginLeft: "25%" }} className=" card-img-top" alt="default place holder image" />
            <div className="card-body">
              <h3 className="card-title" style={{ fontFamily: "Rockwell" }}>{topping.name}</h3>
              <h5 className="card-title">Quantity: <span style={{ color: "red" }}> {topping.quantity}</span></h5>
            </div>
            <button className="btn" style={{ background: "#FA5C3D" }} onClick={() => handleRemoveTopping(topping._id)}>Delete</button>
            {error && (
              <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
            )}
          </div>
        ))
      )}
    </>
  );
};

export default MeatsToppings;
