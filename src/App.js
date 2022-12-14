import Homepage from "./pages/Calci/Homepage";
import Calculator from "./pages/Calci/Calculator";
import "./App.css";
import TemperatureConverter from "./pages/Calci/TemperatureConverter";
import Quadratic from "./pages/Calci/Quadratic";
import { Routes, Route } from "react-router-dom";
import Logarithm from "./pages/Calci/Logarithm";
function App(props) {
  return (
    <>
      {/* <Homepage/> */}
      {/* <Calculator/> */}
      {/* <TemperatureConverter /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/temperature" element={<TemperatureConverter />} />
        <Route path="/quadratic" element={<Quadratic />} />
        <Route path="/logarithm" element={<Logarithm />} />
      </Routes>
    </>
  );
}

export default App;
