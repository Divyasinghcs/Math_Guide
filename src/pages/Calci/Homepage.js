import { Link } from "react-router-dom";
import Card from "../../util/Card";
import "./Homepage.css";
import { MdOutlineCalculate } from "react-icons/md";
import calc from "../../resource/calc.png";
import temp from "../../resource/temp.png";
import qesolver from "../../resource/qesolver.png";
import log from "../../resource/log.png";
import hcflcm from "../../resource/hcflcm.png";
import HcfLcm from "./HcfLcm";
function Homepage(props) {
  return (
    <>
      <div className="home">
        <div className="mtitle">
          <h2>Math Guide</h2>
        </div>
        <div className="body">
          <table>
            <tr>
              <th>
                <Link to="/calculator" className="links">
                  <Card className="tiles">
                    {/* <div className="icons">
                      <MdOutlineCalculate size="120px" color="purple" />
                      <h2> Calculator </h2>
                    </div> */}

                    <img src={calc} alt="calculator" />
                    {/* <div className="centered">Calculator</div> */}
                  </Card>
                </Link>
              </th>
              <th>
                <Link to="/temperature" className="links">
                  <Card className="tiles">
                    <img src={temp} alt="temperature" />
                  </Card>
                </Link>
              </th>
              <th>
                <Link to="/quadratic" className="links">
                  <Card className="tiles">
                    {/* <h2>
                      Quadratic Equation
                      <br />
                      Solver{" "}
                    </h2> */}
                    <img src={qesolver} alt="quadratic solver" />
                  </Card>
                </Link>
              </th>
            </tr>
            <tr>
              <th>
                <Link to="/logarithm" className="links">
                  <Card className="tiles">
                    {/* <h2>Logarithm</h2> */}
                    <img src={log} alt="logatrithm" />
                  </Card>
                </Link>
              </th>
              <th>
                <Link to="/hcflcm" className="links">
                  <Card className="tiles">
                    <img src={hcflcm} alt="hcflcm" />
                  </Card>
                </Link>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Homepage;
