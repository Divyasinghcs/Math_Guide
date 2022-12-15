import "./Quadratic.css";
import Card from "../../util/Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
function Quadratic(props) {
  const [aInputValue, setAValue] = useState("");
  const [bInputValue, setBValue] = useState("");
  const [cInputValue, setCValue] = useState("");
  const [outInputValue, setOutValue] = useState("");
  function onAchangeHandler(event) {
    setAValue(event.target.value);
  }
  function onBchangeHandler(event) {
    setBValue(event.target.value);
  }
  function onCchangeHandler(event) {
    setCValue(event.target.value);
  }
  let str1 = "";
  let str2 = "";
  function solution(a, b, c) {
    let d = b * b - 4 * a * c;
    if (d > 0) {
      str1 = "Real and Distinct Roots.";
      let x1 = (b * -1 + Math.sqrt(d)) / (2 * a);
      let x2 = (b * -1 - Math.sqrt(d)) / (2 * a);
      str2 = x1.toFixed(2) + " and " + x2.toFixed(2);
    } else if (d < 0) {
      str1 = "Imaginary Roots.";
      let p1 = (b * -1) / (2 * a);
      let p2 = Math.sqrt(d * -1) / (2 * a);
      let x1 = p1.toFixed(2) + " + i" + p2.toFixed(2);
      let x2 = p1.toFixed(2) + " - i" + p2.toFixed(2);
      str2 = x1 + " and " + x2;
    } else {
      str1 = "Real and Equal Roots.";
      let x1 = (b * -1) / (2 * a);
      str2 = x1 + " and " + x1;
    }
  }
  function clickSubmit() {
    try {
      let a = parseInt(aInputValue);
      let b = parseInt(bInputValue);
      let c = parseInt(cInputValue);

      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("give proper input");
      } else {
        solution(a, b, c);
        let string1 = "Nature of Roots: " + str1;
        let string2 = "Roots are: " + str2;
        let string = string1 + "\n" + string2;

        setOutValue(string);
      }
    } catch (e) {
      alert(e);
    }
  }

  return (
    <>
      <div className="outer">
        <div className="title">
          <Link to="/" className="homeicon">
            <AiFillHome></AiFillHome>
          </Link>
          <h2>Quadratic Equation Solver</h2>
        </div>
        <Card className="box">
          <div className="quadraticbody">
            <input type="number" onChange={onAchangeHandler} placeholder="A" />
            <p>
              x<sup>2</sup>+
            </p>
            <input type="number" onChange={onBchangeHandler} placeholder="B" />
            <p>x+</p>
            <input type="number" onChange={onCchangeHandler} placeholder="C" />
            <p>= 0</p>
          </div>
          <div className="outputdiv">
            <button onClick={clickSubmit}>SUBMIT</button>
            <textarea disabled value={outInputValue}></textarea>
          </div>
        </Card>
      </div>
    </>
  );
}
export default Quadratic;
