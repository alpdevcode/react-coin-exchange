import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const TableCoin = styled.table`
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
`;

export default function CoinList(props) {
    let tableBalance = null;

    if (props.showBalance) {
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
            props.coinData.map(
                ({key, name, ticker, balance, price}) => 
                <Coin key={key} id={key} name={name} ticker={ticker} balance={balance} price={price} handleRefresh={props.handleRefresh} showBalance={props.showBalance} />
            )
          }
        </tbody>
      </TableCoin>
    )
}
