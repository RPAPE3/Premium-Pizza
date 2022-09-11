import React from "react";
import Image from "react-bootstrap/Image";

import Default from "../../assets/images/Default.png";

const CheeseToppings = ({ categories, test }) => {

 
 

    function filterToppings () {

      return categories.filter(
        (category) => category.name === "Cheese"
      )
    }
  
  
  return (
    <>
    {filterToppings().map((category) => (
      <h2> {category.name} </h2>
    ))}
      {filterToppings().map((category) => 
          category.toppings.map((topping) => ( 
           
            <div key={topping._id} className="col-3 my-5 mx-5 card" >
            <Image src={Default} style={{ maxWidth: "50%", marginLeft: "25%" }} className=" card-img-top" alt="default place holder image" />
            <div className="card-body">
              <h5 className="card-title">{topping.name}</h5>
              <p className="card-text">Some quick example.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          ))
        )}
    </>
  );
};

export default CheeseToppings;