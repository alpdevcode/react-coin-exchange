import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const Header = styled.header`
    background-color: #282c34;
    min-height: 15vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Img = styled.img`
    height: 8rem;
    pointer-events: none;
`;

export default function CoinHeader() {
    return (
      <Header>
        <Img src={logo} alt="logo" />
        <h1>
          Coin Exchange
        </h1>
      </Header>
    );
}
