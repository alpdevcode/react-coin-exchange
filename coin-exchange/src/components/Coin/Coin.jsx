import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableDetailCoin = styled.td`
  border: 1px solid #cccccc;
  width: 25vh;
`;

export default class Coin extends Component {

  handleClick = (event) => {
    event.preventDefault();

    this.props.handleRefresh(this.props.id);
  }

  render() {
    let tableDetailCoinBalance = null;

  if (this.props.showBalance) {
    tableDetailCoinBalance = <TableDetailCoin>{this.props.balance}</TableDetailCoin>;
  }

    return (        
        <tr>
            <TableDetailCoin>{this.props.name}</TableDetailCoin>
            <TableDetailCoin>{this.props.ticker}</TableDetailCoin>
            {tableDetailCoinBalance}
            <TableDetailCoin>{this.props.price}</TableDetailCoin>
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