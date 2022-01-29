import './App.css';
import React, { Component } from 'react';
import CoinHeader from './components/CoinHeader/CoinHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import axios from 'axios';

const COIN_COUNT = 10;

// Coinpaprika API URLs
const COIN_LIST = 'https://api.coinpaprika.com/v1/coins';
const COIN_DTL = 'https://api.coinpaprika.com/v1/tickers/';

// Utility Functions
const formatPrice = (price) => parseFloat(Number(price).toFixed(3));

export default class App extends Component {
  
  state = {
    balance: 10000,
    coinData: [],
    showBalance: true,
  }

  componentDidMount = async () => {
    const response = await axios.get(COIN_LIST);
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const coinList = await Promise.all(coinIds.map( id => axios.get(COIN_DTL + id) ) );
    const coinData = coinList.map( ({data}) => {
      return {
        key:      data.id,
        name:     data.name,
        ticker:   data.symbol,
        balance:  0,
        price:    formatPrice(data.quotes['USD'].price),
      }
    });
    this.setState( {coinData} );
  }

  handleRefresh = async (keyUpdateValue) => {

    const coinUpdatedResult = await axios.get(COIN_DTL + keyUpdateValue);
    const coinUpdatedPrice = formatPrice(coinUpdatedResult.data.quotes['USD'].price);
    const newCoinData = this.state.coinData.map( (coinValues) =>
      {
        let newPrice = coinValues.price;
        if (coinValues.key === keyUpdateValue) {
          newPrice = coinUpdatedPrice;
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
        <AccountBalance 
          amount={this.state.balance} 
          showBalance={this.state.showBalance} 
          handleDisplayBalance={this.handleDisplayBalance} 
        />
        <CoinList 
          coinData={this.state.coinData} 
          handleRefresh={this.handleRefresh} 
          showBalance={this.state.showBalance} 
        />
      </div>
    );
  }
}