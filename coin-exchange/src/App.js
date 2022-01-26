import './App.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        { 
          name: "Bitcoin",
          ticker: "BTC",
          price: 35000
        },
        { 
          name: "Ethereum",
          ticker: "ETH",
          price: 3000
        },
        { 
          name: "Binance Coin",
          ticker: "BNB",
          price: 300
        },
        { 
          name: "Cardano",
          ticker: "ADA",
          price: 1
        },
        { 
          name: "Solana",
          ticker: "SOL",
          price: 100
        },
        { 
          name: "Polkadot",
          ticker: "DOT",
          price: 19
        },
      ],
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Coin Exchange
          </h1>
        </header>
        <AccountBalance amount={this.state.balance} />
        <table className="table-coin">
          <thead>
            <tr>
              <td>Name</td>
              <td>Ticker</td>
              <td>Price($)</td>
            </tr>
          </thead>
          <tbody>
            <Coin name={this.state.coinData[0].name} ticker={this.state.coinData[0].ticker} price={this.state.coinData[0].price} />
            <Coin name={this.state.coinData[1].name} ticker={this.state.coinData[1].ticker} price={this.state.coinData[1].price} />
            <Coin name={this.state.coinData[2].name} ticker={this.state.coinData[2].ticker} price={this.state.coinData[2].price} />
            <Coin name={this.state.coinData[3].name} ticker={this.state.coinData[3].ticker} price={this.state.coinData[3].price} />
            <Coin name={this.state.coinData[4].name} ticker={this.state.coinData[4].ticker} price={this.state.coinData[4].price} />
            <Coin name={this.state.coinData[5].name} ticker={this.state.coinData[5].ticker} price={this.state.coinData[5].price} />
          </tbody>
        </table>
      </div>
    );
  }
}