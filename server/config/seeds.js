const db = require("./connection");
const { User, Topping, Category, Pizza } = require("../models");



db.once("open", async () => {
  try {


  await User.deleteMany({});
  await Category.deleteMany({});
  await Topping.deleteMany({});
  await Pizza.deleteMany({});


 await User.create({
        firstName: "test",
        lastName: "test",
        email: "test@test.com",
        password: "password123",
        username: "Test"
    });

    console.log('User seeded');


const toppings = await Topping.insertMany([
    { 
        name: "Pepperoni", 
        quantity: 500
    },
    {
        name: "Sausage", 
        quantity: 450
    },
    {
        name: "Bacon", 
        quantity: 350
    },
    {
        name: "Black Olives", 
        quantity: 300
    },
    {
        name: "Tomato", 
        quantity: 250
    },
    {
        name: "Banana Peppers", 
        quantity: 150
    },
    {
        name: "Mozzarella", 
        quantity: 999
    },
    {
        name: "Cheddar", 
        quantity: 500
    },
    {
        name: "ricotta ", 
        quantity: 300
    }
]);

console.log('Toppings seeded');

 const pizzas = await Pizza.insertMany([
    {
        pizzaName: "Pepperoni Pizza",
        toppings: [toppings[0]._id, toppings[6]._id]
    },
    {
        pizzaName: "Sausage Pizza",
        toppings: [toppings[1]._id, toppings[7]._id]
    },
    {
        pizzaName: "Bacon Pizza",
        toppings: [toppings[2]._id, toppings[8]._id]
    },
    {
        pizzaName: "Refreshing Pizza",
        toppings: [toppings[3]._id, toppings[6]._id]
    },
    {
        pizzaName: "Garden Pizza",
        toppings: [toppings[4]._id, toppings[7]._id]
    },
    {
        pizzaName: "Arizona Pizza",
        toppings: [toppings[5]._id, toppings[8]._id]
    },
    {
        pizzaName: "Python Pizza",
        toppings: [toppings[0]._id, toppings[3]._id, toppings[6]._id]
    },
    {
        pizzaName: "Ruby Pizza",
        toppings: [toppings[1]._id, toppings[4]._id, toppings[7]._id]
    },
    {
        pizzaName: "JavaScript Pizza",
        toppings: [toppings[2]._id, toppings[5]._id, toppings[8]._id]
    },

]);

console.log('Pizzas seeded');

await Category.insertMany([
    { 
        name: "Meats",
        toppings: [toppings[0], toppings[1], toppings[2]]
    },
    { 
        name: "Veggies",
        toppings: [toppings[3]._id, toppings[4]._id, toppings[5]]
    },
    { 
        name: "Cheese",
        toppings: [toppings[6], toppings[7], toppings[8]] 
    },
    { 
        name: "Meat Lovers",
        pizzas: [pizzas[0], pizzas[1], pizzas[2]] 
    },
    { 
        name: "Vegetarian",
        pizzas: [pizzas[3], pizzas[4]._id, pizzas[5]] 
    },
    { 
        name: "Specialty",
        pizzas: [pizzas[6], pizzas[7], pizzas[8]] 
    }
]);

console.log('Categories seeded');

  process.exit(0);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});