import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const TableCoin = styled.table`
  margin-left: 5rem;
  width: 80vw;
`;

export default function CoinList(props) {

    return (
      <TableCoin className='table table-primary table-bordered'>
        <thead>
          <tr>
          <td>Name</td>
          <td>Ticker</td>
          <td>Price($)</td>
          <td>Balance</td>
          <td>Actions</td>
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
