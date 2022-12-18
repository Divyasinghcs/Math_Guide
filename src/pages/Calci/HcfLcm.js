import "./HcfLcm.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import Card from "../../util/Card";
import { useState } from "react";
function HcfLcm(props) {
  const [firstnumberhcf, setFirstNumberhcf] = useState("");
  const [secondNumberhcf, setSecondNumberhcf] = useState("");
  const [valuehcf, setValuehcf] = useState("NA");
  const [firstnumberlcm, setFirstNumberlcm] = useState("");
  const [secondNumberlcm, setSecondNumberlcm] = useState("");
  const [valuelcm, setValuelcm] = useState("NA");

  const onlcmfirstChange = (e) => {
    setFirstNumberlcm(e.target.value);
  };
  const onlcmsecondChange = (e) => {
    setSecondNumberlcm(e.target.value);
  };
  const onhcffirstChange = (e) => {
    setFirstNumberhcf(e.target.value);
  };
  const onhcfsecondChange = (e) => {
    setSecondNumberhcf(e.target.value);
  };
  const gcd = (a, b) => {
    if (b == 0) {
      return a;
    } else return gcd(b, a % b);
  };
  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  };
  const onhcfSubmit = () => {
    try {
      let a = firstnumberhcf;
      let b = secondNumberhcf;
      if (b == 0 || a == 0) {
        alert("We cannot find hcf with 0");
      } else {
        let p = gcd(a, b);
        setValuehcf(p);
      }
    } catch (e) {
      alert(e);
    }
  };
  const onlcmSubmit = () => {
    try {
      let a = firstnumberlcm;
      let b = secondNumberlcm;
      let p = lcm(a, b);
      setValuelcm(p);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <>
      <div className="mainbody">
        <div className="lcmtitle">
          <Link to="/" className="homeicon">
            <AiFillHome />
          </Link>
          <p>HCF and LCM calculator</p>
        </div>
        <Card className="hcfbody">
          <h2>HCF Calculator</h2>
          <div className="hcfcontent">
            <input
              type="number"
              placeholder="First Number"
              value={firstnumberhcf}
              onChange={onhcffirstChange}
            />
            <input
              type="number"
              placeholder="Second Number"
              value={secondNumberhcf}
              onChange={onhcfsecondChange}
            />
            <p>=</p>
            <p>{valuehcf}</p>
          </div>
          <div>
            <button onClick={onhcfSubmit} className="submitbutton">
              Submit
            </button>
          </div>
        </Card>
        <Card className="hcfbody">
          <h2>LCM Calculator</h2>

          <div className="hcfcontent">
            <input
              type="number"
              placeholder="First Number"
              value={firstnumberlcm}
              onChange={onlcmfirstChange}
            />
            <input
              type="number"
              placeholder="Second Number"
              value={secondNumberlcm}
              onChange={onlcmsecondChange}
            />
            <p>=</p>
            <p>{valuelcm}</p>
          </div>
          <div>
            <button onClick={onlcmSubmit} className="submitbutton">
              Submit
            </button>
          </div>
        </Card>
      </div>
    </>
  );
}
export default HcfLcm;
