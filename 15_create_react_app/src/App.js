import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const handleCoinChange = (event) => {
    const coinId = event.target.value;
    const coin = coins.find(c => c.id === coinId);
    setSelectedCoin(coin);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setSelectedCoin(json[0]); // 페이지 로드시 null 에러를 막기 위해 첫 번째 코인을 기본값으로 설정
        setLoading(false);
      });
  }, []); // 한번만 실행하고 싶으니 (로딩 끝나면 없어져야 하는 글자니) 아무것도 주시하고 있지 않겠다.

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> :
      <div>
        <select onChange={handleCoinChange}>
          {coins.map((coin) =>
          <option key={coin.id} value={coin.id}> { /* value={coin.id} 이게 있어서 handleCoinChange에서 coinId값 받을 수 있다 */ }
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </option>)}
        </select>
        <h1>몇 달러를 가지고 있니?</h1>
        <input type="number" value={amount} onChange={handleAmountChange} />$<br /><br />
        {selectedCoin && (
          <div>
            너는 {amount}$로 {selectedCoin.name}을 {(amount / selectedCoin.quotes.USD.price).toFixed(3)}개 살 수 있어!
          </div>
        )}
      </div>
      }
    </div>
  );
}

export default App;
