import './App.css';
import React, { Component } from 'react';
import CoinHeader from './components/CoinHeader/CoinHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        { 
          name: "Bitcoin",
          ticker: "BTC",
          balance: 1,
          price: 35000
        },
        { 
          name: "Ethereum",
          ticker: "ETH",
          balance: 10,
          price: 3000
        },
        { 
          name: "Binance Coin",
          ticker: "BNB",
          balance: 15,
          price: 300
        },
        { 
          name: "Cardano",
          ticker: "ADA",
          balance: 1500,
          price: 1
        },
        { 
          name: "Solana",
          ticker: "SOL",
          balance: 5,
          price: 100
        },
        { 
          name: "Polkadot",
          ticker: "DOT",
          balance: 50,
          price: 19
        },
      ],
      showBalance: true,
    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleDisplayBalance = this.handleDisplayBalance.bind(this);
  }

  handleRefresh(tickerChangeValue) {

    const newCoinData = this.state.coinData.map( ({name, ticker, balance, price}) =>
      {
        let newPrice = price;
        if (ticker === tickerChangeValue) {
          const randomPercent = 0.99 + Math.random() * 0.01;
          newPrice = price * randomPercent;
        }

        return {
          name,
          ticker,
          balance,
          price: newPrice,
        }
      }
    )

    this.setState( {coinData: newCoinData} )
  }

  handleDisplayBalance() {
    this.setState( ({showBalance}) => { return {showBalance: !showBalance }});
  }

  render() {
    return (
      <div className="App">
        <CoinHeader />
        <AccountBalance amount={this.state.balance} showBalance={this.state.showBalance} handleDisplayBalance={this.handleDisplayBalance} />
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} showBalance={this.state.showBalance} />
      </div>
    );
  }
}