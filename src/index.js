import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

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
root.render(ifElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
