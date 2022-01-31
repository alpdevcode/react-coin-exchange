import './App.css';
import React, { useState, useEffect } from 'react';
import CoinHeader from './components/CoinHeader/CoinHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import axios from 'axios';

// Styling
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/materia/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

const COIN_COUNT = 10;

// Coinpaprika API URLs
const COIN_LIST = 'https://api.coinpaprika.com/v1/coins';
const COIN_DTL = 'https://api.coinpaprika.com/v1/tickers/';

// Utility Functions
const formatPrice = (price) => parseFloat(Number(price).toFixed(3));


export default function App(props) {

  const [balance, setBalance] = useState(10000);
  const [coinData, setCoinData] = useState([]);
  const [showBalance, setShowBalance] = useState(false);

  const componentDidMount = async () => {
    const response = await axios.get(COIN_LIST);
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const coinList = await Promise.all(coinIds.map( id => axios.get(COIN_DTL + id) ) );
    const coinDataNew = coinList.map( ({data}) => {
      return {
        key:      data.id,
        name:     data.name,
        ticker:   data.symbol,
        balance:  0,
        price:    formatPrice(data.quotes['USD'].price),
      }
    });
    setCoinData(coinDataNew);
  }

  useEffect( () => {
    if (coinData.length === 0) {
      componentDidMount();
    }
  });

  const handleAddBalance = () => {
    setBalance( oldBalance => oldBalance + 250 );
  }

  const handleRefresh = async (keyUpdateValue) => {

    const coinUpdatedResult = await axios.get(COIN_DTL + keyUpdateValue);
    const coinUpdatedPrice = formatPrice(coinUpdatedResult.data.quotes['USD'].price);
    const coinDataNew = coinData.map( (coinValues) =>
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

    setCoinData(coinDataNew);
  }

  const handleDisplayBalance = () => {
    setShowBalance( oldShowBalance => !oldShowBalance );
  }

  return (
    <div className="App">
      <CoinHeader />
      <AccountBalance 
        amount={balance} 
        showBalance={showBalance} 
        handleDisplayBalance={handleDisplayBalance}
        handleAddBalance={handleAddBalance}
      />
      <CoinList 
        coinData={coinData} 
        handleRefresh={handleRefresh} 
        showBalance={showBalance} 
      />
    </div>
  );
}