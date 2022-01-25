import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableDetailCoin = styled.td`
  border: 1px solid #cccccc;
  width: 25vh;
`;

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
        <tr>
            <TableDetailCoin>{this.props.name}</TableDetailCoin>
            <TableDetailCoin>{this.props.ticker}</TableDetailCoin>
            <TableDetailCoin>{this.state.price}</TableDetailCoin>
            <TableDetailCoin>
              <form action="#" method="post">
                <button onClick={this.handleClick}>Refresh</button>
              </form>
            </TableDetailCoin>
       </tr>
    );
  }
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}