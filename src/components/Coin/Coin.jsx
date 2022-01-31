import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableDetailCoin = styled.td`
  border: 1px solid #cccccc;
  width: 15vw;
`;

const TableDetailCoinAction = styled(TableDetailCoin)`
  width 20vw;
`;

const Button = styled.button`
  font-size: 11px;
  margin: 5px 5px;
  width: 72px;
`;

export default function Coin(props) {

  const handleClick = (event) => {
    event.preventDefault();

    props.handleRefresh(props.id);
  }

  let tableDetailCoinBalance = '-';
  if (props.showBalance) {
    tableDetailCoinBalance = <>{props.balance}</>;
  }

  return (        
      <tr>
          <TableDetailCoin>{props.name}</TableDetailCoin>
          <TableDetailCoin>{props.ticker}</TableDetailCoin>
          <TableDetailCoin>{props.price}</TableDetailCoin>
          <TableDetailCoin>{tableDetailCoinBalance}</TableDetailCoin>
          <TableDetailCoinAction>
            <form action="#" method="post">
              <Button onClick={handleClick} className='btn-primary'>Refresh</Button>
              <Button onClick={handleClick} className='btn-warning'>Buy</Button>
              <Button onClick={handleClick} className='btn-danger'>Sell</Button>
            </form>
          </TableDetailCoinAction>
      </tr>
  );
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}