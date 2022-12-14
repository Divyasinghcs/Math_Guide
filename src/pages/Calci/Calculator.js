import { useState } from 'react'
import './Calculator.css'
function Calculator(props) {
  const [inputValue, setInputValue] = useState('')
  const zeroClicked = () => {
    setInputValue(inputValue + '0')
  }
  const oneClicked = () => {
    setInputValue(inputValue + '1')
  }
  const twoClicked = () => {
    setInputValue(inputValue + '2')
  }
  const threeClicked = () => {
    setInputValue(inputValue + '3')
  }
  const fourClicked = () => {
    setInputValue(inputValue + '4')
  }
  const fiveClicked = () => {
    setInputValue(inputValue + '5')
  }
  const sixClicked = () => {
    setInputValue(inputValue + '6')
  }
  const sevenClicked = () => {
    setInputValue(inputValue + '7')
  }
  const eightClicked = () => {
    setInputValue(inputValue + '8')
  }
  const nineClicked = () => {
    setInputValue(inputValue + '9')
  }
  const plusClicked = () => {
    setInputValue(inputValue + '+')
  }
  const minusClicked = () => {
    setInputValue(inputValue + '-')
  }
  const multiClicked = () => {
    setInputValue(inputValue + '*')
  }
  const divideClicked = () => {
    setInputValue(inputValue + '/')
  }
  function allClear() {
    setInputValue('')
  }
  function back() {
    let size = inputValue.length
    if (size > 0) {
      let str = inputValue.substring(0, size - 1)
      console.log(str)
      setInputValue(str)
    }
  }
  function onSub() {
    try {
      let str = eval(inputValue)
      setInputValue(str)
    } catch (e) {
      setInputValue('Syntax Error')
    }
  }
  return (
    <>
      <div className="out">
        <div className="name">
          <h2>Calculator</h2>
        </div>
        <div className="inner">
          <input type="text" disabled value={inputValue}></input>
          <table className="button">
            <tr>
              <th>
                <button className="submit" onClick={onSub}>
                  SUBMIT
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <button
                  className="digit"
                  style={{
                    backgroundColor: '#c17ef7',
                    fontSize: '23px',
                    borderRadius: '50%',
                  }}
                  onClick={plusClicked}
                >
                  +
                </button>
              </th>
              {/* <style>margin-right:16px</style> */}
              <th>
                <button className="digit" onClick={nineClicked}>
                  9
                </button>
              </th>
              <th>
                <button className="digit" onClick={eightClicked}>
                  8
                </button>
              </th>
              <th>
                <button className="digit" onClick={sevenClicked}>
                  7
                </button>
              </th>
            </tr>

            <tr>
              <th>
                <button
                  className="digit"
                  onClick={minusClicked}
                  style={{
                    backgroundColor: '#c17ef7',
                    fontSize: '23px',
                    borderRadius: '50%',
                  }}
                >
                  -
                </button>
              </th>
              <th>
                <button className="digit" onClick={sixClicked}>
                  6
                </button>
              </th>
              <th>
                <button className="digit" onClick={fiveClicked}>
                  5
                </button>
              </th>
              <th>
                <button className="digit" onClick={fourClicked}>
                  4
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <button
                  className="digit"
                  onClick={multiClicked}
                  style={{
                    backgroundColor: '#c17ef7',
                    fontSize: '23px',
                    borderRadius: '50%',
                  }}
                >
                  *
                </button>
              </th>
              <th>
                <button className="digit" onClick={threeClicked}>
                  3
                </button>
              </th>
              <th>
                <button className="digit" onClick={twoClicked}>
                  2
                </button>
              </th>
              <th>
                <button className="digit" onClick={oneClicked}>
                  1
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <button
                  className="digit"
                  onClick={divideClicked}
                  style={{
                    backgroundColor: '#c17ef7',
                    fontSize: '23px',
                    borderRadius: '50%',
                  }}
                >
                  /
                </button>
              </th>
              <th>
                <button
                  className="digit"
                  onClick={allClear}
                  style={{ backgroundColor: '#f24e30' }}
                >
                  AC
                </button>
              </th>
              <th>
                <button
                  className="digit"
                  onClick={back}
                  style={{ backgroundColor: '#f24e30' }}
                >
                  {'<-'}
                </button>
              </th>
              <th>
                <button className="digit" onClick={zeroClicked}>
                  0
                </button>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}
export default Calculator
