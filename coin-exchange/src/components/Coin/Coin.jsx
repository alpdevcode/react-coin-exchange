import React, { Component } from 'react';
import './Coin.css';
import PropTypes from 'prop-types';

export default class Coin extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.price
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    
    const randomPercent = 0.99 + Math.random() * 0.01;
    this.setState(
      (oldState) => {
        return {
          price: oldState.price * randomPercent
        }
      }
    );
  }

  render() {
    return (        
        <tr className="row-coin">
            <td>{this.props.name}</td>
            <td>{this.props.ticker}</td>
            <td>{this.state.price}</td>
            <td>
              <form action="#" method="post">
                <button onClick={this.handleClick}>Refresh</button>
              </form>
            </td>
       </tr>
    );
  }
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}