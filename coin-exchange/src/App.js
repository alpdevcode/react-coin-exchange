import './App.css';
import React, { Component } from 'react';
import CoinHeader from './components/CoinHeader/CoinHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import axios from 'axios';

const COIN_COUNT = 15;
export default class App extends Component {
  
  state = {
    balance: 10000,
    coinData: [],
    showBalance: true,
  }

  componentDidMount() {
    axios.get('https://api.coinpaprika.com/v1/coins')
      .then( (response) => {
        let coinData = response.data.slice(0, COIN_COUNT).map( (coin) => {
          return {
            key:      coin.id,
            name:     coin.name,
            ticker:   coin.symbol,
            balance:  0,
            price:    0,
          }
        });
        this.setState( {coinData} );
      })
  }

  handleRefresh = (tickerChangeValue) => {

    const newCoinData = this.state.coinData.map( (coinValues) =>
      {
        let newPrice = coinValues.price;
        if (coinValues.ticker === tickerChangeValue) {
          const randomPercent = 0.99 + Math.random() * 0.01;
          newPrice = coinValues.price * randomPercent;
        }

        return {
          ...coinValues,
          price: newPrice,
        }
      }
    )

    this.setState( {coinData: newCoinData} )
  }

  handleDisplayBalance = () => {
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