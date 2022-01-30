import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableDetailCoin = styled.td`
  border: 1px solid #cccccc;
  width: 25vh;
`;

export default function Coin(props) {

  const handleClick = (event) => {
    event.preventDefault();

    props.handleRefresh(props.id);
  }

  let tableDetailCoinBalance = null;
  if (props.showBalance) {
    tableDetailCoinBalance = <TableDetailCoin>{props.balance}</TableDetailCoin>;
  }

  return (        
      <tr>
          <TableDetailCoin>{props.name}</TableDetailCoin>
          <TableDetailCoin>{props.ticker}</TableDetailCoin>
          {tableDetailCoinBalance}
          <TableDetailCoin>{props.price}</TableDetailCoin>
          <TableDetailCoin>
            <form action="#" method="post">
              <button onClick={handleClick}>Refresh</button>
            </form>
          </TableDetailCoin>
      </tr>
  );
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}