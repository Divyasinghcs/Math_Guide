import "./Logarithm.css";
import { useState } from "react";
function Logarithm(props) {
  const [basevalue, setbaseValue] = useState("");
  const [numbervalue, setnummberValue] = useState("");
  const [answer, setAnswer] = useState("");

  const onBaseClicked = (e) => {
    setbaseValue(e.target.value);
  };
  const onNumberClicked = (e) => {
    setnummberValue(e.target.value);
  };
  function logp(n, b) {
    return n > 1 ? 1 + logp(n / b, b) : 0;
  }
  const submitHandler = () => {
    let ans = logp(numbervalue, basevalue);
    setAnswer(ans);
  };

  return (
    <>
      <div className="outerr">
        <div className="titlee">
          <h2>Logarithm</h2>
        </div>
        <div className="card">
          <div className="inners">
            <p>
              log
              <sub>
                <input type="number" onChange={onBaseClicked} />
              </sub>
              <input type="number" onChange={onNumberClicked}></input>=
              <input type="text" disabled value={answer}></input>
            </p>
          </div>
          <div className="button" onClick={submitHandler}>
            <button className="answer">Answer</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Logarithm;
