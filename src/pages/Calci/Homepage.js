import { Link } from "react-router-dom";
import Card from "../../util/Card";
import "./Homepage.css";
import { MdOutlineCalculate } from "react-icons/md";
import calc from "../../resource/calc.png";

function Homepage(props) {
  return (
    <>
      <div className="home">
        <div className="title">
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
                    <div>
                      <img src={calc} alt="calculator" />
                      <h2>Calculator</h2>
                    </div>
                  </Card>
                </Link>
              </th>
              <th>
                <Link to="/temperature" className="links">
                  <Card className="tiles">
                    <h2>
                      {" "}
                      Temperature <br />
                      Converter{" "}
                    </h2>
                  </Card>
                </Link>
              </th>
              <th>
                <Link to="/quadratic" className="links">
                  <Card className="tiles">
                    <h2>
                      Quadratic Equation
                      <br />
                      Solver{" "}
                    </h2>
                  </Card>
                </Link>
              </th>
            </tr>
            <tr>
              <th>
                <Link to="/logarithm" className="links">
                  <Card className="tiles">
                    <h2>Logarithm</h2>
                  </Card>
                </Link>
              </th>
              <th>
                <Card className="tiles">
                  <h2> Calculator </h2>
                </Card>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Homepage;
