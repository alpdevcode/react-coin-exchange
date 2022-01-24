import './App.css';
import logo from './logo.svg';
import Coin from './components/Coin/Coin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Coin Exchange
        </h1>
      </header>
      <table className="table-coin">
        <thead>
          <tr>
            <td>Name</td>
            <td>Ticker</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={35000} />
          <Coin name="Ethereum" ticker="BTC" price={3000} />
          <Coin name="Binance Coin" ticker="BNB" price={300} />
          <Coin name="Cardano" ticker="ADA" price={1} />
          <Coin name="Solana" ticker="BNB" price={100} />
          <Coin name="Polkadot" ticker="DOT" price={19} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
