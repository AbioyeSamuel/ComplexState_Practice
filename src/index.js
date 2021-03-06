import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events

//Spread Operator

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", ...citrus, "Melon"];

console.log(fruits);

const fullName = {
  fName: "James",
  lName: "Bond"
};
const User = {
  ...fullName,
  id: 1,
  username: "jamesbond007"
};
console.log(User);
