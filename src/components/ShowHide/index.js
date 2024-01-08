// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstCard: 'none',
    lastCard: 'none',
    isFirstCard: false,
    isLastCard: false,
  }

  firstName = () => {
    const {firstCard} = this.state
    this.setState(() => ({
      firstCard: firstCard === 'none' ? 'block' : 'none',
      isFirstCard: !firstCard,
    }))
  }

  lastName = () => {
    const {lastCard} = this.state
    this.setState(() => ({
      lastCard: lastCard === 'none' ? 'block' : 'none',
      isLastCard: !lastCard,
    }))
  }

  render() {
    const {isFirstCard, lastCard} = this.state
    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="cards-container">
          <div className="card-container">
            <button
              onClick={this.isFirstName}
              className="btn-style"
              type="button"
            >
              Show/Hide Firstname
            </button>
            <p className="name-card" style={{display: isFirstCard}}>
              Joe
            </p>
            {isFirstCard ? <p className="name-card"> Joe</p> : ''}
          </div>
          <div className="card-container">
            <button onClick={this.lastName} className="btn-style" type="button">
              Show/Hide Lastname
            </button>
            <p className="name-card" style={{display: lastCard}}>
              Jones
            </p>
            {lastCard ? <p className="name-card">Jonas</p> : 'null'}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
