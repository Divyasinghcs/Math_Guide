import { useState } from "react";
import "./TemperatureConverter.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
function TemperatureConverter(props) {
  const [inputValue, setInputValue] = useState("");
  const [selectFromFh, setFromFh] = useState(false);
  const [selectFromC, setFromC] = useState(false);
  const [selectFromK, setFromK] = useState(false);
  const [selectToFh, setToFh] = useState(false);
  const [selectToC, setToC] = useState(false);
  const [selectToK, setToK] = useState(false);

  const [symbol, setSymbol] = useState("");
  function onInputChange(event) {
    setInputValue(event.target.value);
  }

  function fromCelciusClicked() {
    setFromC(false);
    setFromFh(true);
    setFromK(true);
    setToC(true);
    setSymbol("\u00B0 C");
  }

  function fromFahrenheitClicked() {
    setFromFh(false);
    setFromC(true);
    setFromK(true);
    setToFh(true);
    setSymbol("\u00B0 F");
  }
  function fromKelvinClicked() {
    setFromFh(true);
    setFromC(true);
    setFromK(false);
    setToK(true);
    setSymbol("K");
  }
  function toCelciusClicked() {
    setToC(false);
    setToFh(true);
    setToK(true);
    // setSymbol("\u00B0 C");
  }
  function toFahrenheitClicked() {
    setToC(true);
    setToFh(false);
    setToK(true);
    // setSymbol("\u00B0 F");
  }
  function toKelvinClicked() {
    setToC(true);
    setToFh(true);
    setToK(false);
    // setSymbol("\u00B0 K");
  }
  function resetClicked() {
    setInputValue("");
    setFromC(false);
    setFromFh(false);
    setFromK(false);
    setToC(false);
    setToFh(false);
    setToK(false);
    setSymbol("");
  }
  function cToF(number) {
    let num = number * 1.8 + 32;
    return num;
  }
  function cToK(number) {
    let num = number + 273.15;
    return num;
  }
  function fToC(number) {
    let num = ((number - 32) * 5) / 9;
    return num;
  }
  function fToK(number) {
    let num = (5 / 9) * number + 459.67;
    return num;
  }
  function kToC(number) {
    let num = number - 273.15;
    return num;
  }
  function kToF(number) {
    let num = (number - 273.15) * (9 / 5) + 32;
    return num;
  }
  function onClickConvert() {
    if (!selectFromC && !selectToFh) {
      // setInputValue(cToF(inputValue));
      setSymbol(cToF(inputValue) + "\u00B0 F");
    } else if (!selectFromC && !selectToK) {
      // setInputValue(cToK(inputValue));
      setSymbol(cToK(inputValue) + "\u00B0 K");
    } else if (!selectFromFh && !selectToC) {
      // setInputValue(fToC(inputValue));
      setSymbol(fToC(inputValue) + "\u00B0 C");
    } else if (!selectFromFh && !selectFromK) {
      // setInputValue(fToK(inputValue));
      setSymbol(fToK(inputValue) + "\u00B0 K");
    } else if (!selectFromK && !selectToC) {
      // setInputValue(kToC(inputValue));
      setSymbol(kToC(inputValue) + "\u00B0 C");
    } else if (!selectFromK && !selectFromFh) {
      // setInputValue(kToF(inputValue));
      setSymbol(kToF(inputValue) + "\u00B0 F");
    } else {
      setInputValue("");
      alert("choose properly");
    }
  }
  return (
    <div className="outer">
      <div className="name">
        <Link to="/" className="homeicon">
          <AiFillHome></AiFillHome>
        </Link>
        <h3>Temperature Converter</h3>
      </div>
      <div className="innert">
        <div className="tempinput">
          <input
            type="number"
            value={inputValue}
            onChange={onInputChange}
            placeholder="Temperature"
          ></input>
          <p>{symbol}</p>
        </div>
        <button className="reset" onClick={resetClicked}>
          Reset
        </button>
        <table className="table">
          <tr>
            <th>
              <p>From</p>
            </th>
            <th>
              <p>To</p>
            </th>
          </tr>
          <tr>
            <th>
              <button
                className="temp"
                onClick={fromCelciusClicked}
                disabled={selectFromC}
              >
                Celcius
              </button>
            </th>

            <th>
              <button
                className="temp"
                onClick={toCelciusClicked}
                disabled={selectToC}
              >
                Celcius
              </button>
            </th>
          </tr>
          <tr>
            <th>
              {" "}
              <button
                className="temp"
                onClick={fromFahrenheitClicked}
                disabled={selectFromFh}
              >
                Fahrenheit
              </button>
            </th>
            <th>
              {" "}
              <button
                className="temp"
                onClick={toFahrenheitClicked}
                disabled={selectToFh}
              >
                Fahrenheit
              </button>
            </th>
          </tr>
          <tr>
            <th>
              {" "}
              <button
                className="temp"
                onClick={fromKelvinClicked}
                disabled={selectFromK}
              >
                Kelvin
              </button>
            </th>
            <th>
              {" "}
              <button
                className="temp"
                onClick={toKelvinClicked}
                disabled={selectToK}
              >
                Kelvin
              </button>
            </th>
          </tr>
        </table>
        <div className="rowconvert">
          <button className="convert" onClick={onClickConvert}>
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}
export default TemperatureConverter;
