// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onChange = () => {
    const number = Math.random() * 100
    const randomNumber = Math.ceil(number)
    this.setState(() => ({count: randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="random-card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="generate" onClick={this.onChange}>
            Generate
          </button>
          <p className="number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
