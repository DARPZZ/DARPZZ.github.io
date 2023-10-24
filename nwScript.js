function calculateProfit() {
  const buyPrice = parseFloat(document.getElementById('buyPrice').value);
  const sellPrice = parseFloat(document.getElementById('sellPrice').value);
  const quantity = parseInt(document.getElementById('quantity').value);

  if (isNaN(buyPrice) || isNaN(sellPrice) || isNaN(quantity) || buyPrice <= 0 || sellPrice <= 0 || quantity <= 0) {
    document.getElementById('profitResult').innerText = 'Du mangler at indtaste noget';
    return;
  }

  const buyTax = 0.05;  
  const sellTax = 0.05;  

  const totalBuyCost = buyPrice * quantity * (1 + buyTax);
  const totalSellRevenue = sellPrice * quantity * (1 - sellTax);

  const profit = totalSellRevenue - totalBuyCost;

  document.getElementById('profitResult').innerText = `Potential profit: ${profit.toFixed(2)}`;
}
