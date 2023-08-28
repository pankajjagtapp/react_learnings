import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Car from "./Car";
import Todos from "./Todos";

/////////////// Using React Router

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

// Use State


function CarColor2() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}


function CarColor() {
  const [color, setColor] = useState("red");
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");

  return (
    <h1>
      My Car is a {brand} {model} in {color}
    </h1>
  );
}

// Hooks

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My FavoriteColor is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
      <button type="button" onClick={() => setColor("black")}>
        Black
      </button>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
    </>
  );
}

/// Todo

export default function Todo() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todo} />
      <hr />
      <div>
        Count:{count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// FORMS

function MyForm3() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value);
  };

  return (
    <form>
      <label>My Car is </label>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford"> Ford</option>
        <option value="Volvo"> Volvo</option>
        <option value="Audi"> Audi</option>
      </select>
    </form>
  );
}

function MyForm2() {
  const [textArea, setTextArea] = useState(
    "The Context of textArea goes in the value Attribute"
  );

  const handleChange = (event) => {
    setTextArea(event.target.value);
  };
  return (
    <form>
      <textarea value={textArea} onChange={handleChange}></textarea>
    </form>
  );
}

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your Name
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your Age
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

// React Lists

function Garage3(props) {
  const cars = props.cars;

  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

// Using And Operator

function Garage2(props) {
  const cars = props.cars;

  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && <h2>You have {cars.length} Cars</h2>}
    </>
  );
}
const cars = [
  { id: 1, brand: "Ford" },
  { id: 2, brand: "Toyota" },
  { id: 3, brand: "AUDI" },
];
// let cars = [];

// Complex Conditional Rendering

function MadeGoal(props) {
  return (
    <h1>
      {props.name} you scored {props.number} Goals !!!{" "}
    </h1>
  );
}

function MissedGoal(props) {
  return <h1>Oppsie, You missed {props.name}!!!</h1>;
}

function GoalChecker(props) {
  const isGoal = props.isGoal;
  function goals() {
    if (props.number > 1 && props.name == "Pankaj") {
      alert(`Bravo ${props.number} goals ${props.name}`);
    }
  }

  if (isGoal) {
    // goals();
    return <MadeGoal name="Pankaj" number="2" />;
  }
  return <MissedGoal name="Pankaj" />;
}

// Pass Arguments,  Event type and Props to Events

function FootballGame(props) {
  let shoot = (arg, b) => {
    console.log("b", b);
    alert(arg + b.type);
  };
  return (
    // <button onClick={(b) => shoot("Goal!!! " + props.name, b)}>
    <button onClick={(b) => shoot(`Good Goal ${props.name}!!! `, b)}>
      Take the shot {props.name}
    </button>
  );
}

// Events

function Football(props) {
  const shoot = () => {
    alert("Good shot " + props.name);
  };

  return <button onClick={shoot}>Take the shot {props.name}</button>;
}

// Components in Components

function Garage() {
  const variable = { name: "Ford", type: "Mustang" };
  return (
    <>
      <h1> Who's in my garage?</h1>
      <Car brand={variable} />
    </>
  );
}

// Props in Function Components

// function Car(props) {
//   return <h2>I'm a {props.color} Car Function Component</h2>;
// }

// Class Components
class CarClass extends React.Component {
  render() {
    return <h2>I'm a Car Class Component</h2>;
  }
}

const myFirstElement = <h1>Hello World!!!</h1>;
const newElement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>

    <tr>
      <td>John</td>
    </tr>

    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const jsxElement = <h1> This is a JSX Element. So so easy to work with!</h1>;

const nonJsxElement = React.createElement("h1", {}, "I don't use JSX");

const bigElement = (
  <>
    <p>I am a paragraph</p>
    <p>I am the second paragraph in the same Div Element</p>
  </> // Used the fragment element to over populate the DOM.
);

const emptyElement = <input type="text" />; // Closing an empty element.

const classElement = <h1 className="HTML Class"> Hello World Class Name</h1>;

const x = 5;

let text = "GoodBye";
if (x < 10) {
  text = "Hello";
}
const ifElement = <h1>{text}</h1>;

const container = document.getElementById("pankaj");
const root = ReactDOM.createRoot(container);
root.render(<CarColor2 />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
