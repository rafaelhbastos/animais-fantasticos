export default function initFetchBitcoin() {
  fetch('https://www.blockchain.com/ticker')
    .then(response => response.json())
    .then(bitcoin => {
      const btcPrice = document.querySelector('.btc-price');
      btcPrice.innerText = (1000/bitcoin.BRL.sell).toFixed(4);
  }).catch(erro => {
      console.log(Error(erro));
  });
}

