import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const TableCoin = styled.table`
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
`;

export default class CoinList extends Component {
  render() {
    let tableBalance = null;

    if (this.props.showBalance) {
      tableBalance = <td>Balance</td>;
    }

    return (
      <TableCoin>
        <thead>
          <tr>
          <td>Name</td>
          <td>Ticker</td>
          {tableBalance}
          <td>Price($)</td>
          </tr>
        </thead>
        <tbody>
          {
            this.props.coinData.map(
                ({name, ticker, balance, price}) => 
                <Coin key={ticker} name={name} ticker={ticker} balance={balance} price={price} handleRefresh={this.props.handleRefresh} showBalance={this.props.showBalance} />
            )
          }
        </tbody>
      </TableCoin>
    )
  }
}
