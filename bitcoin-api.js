document.addEventListener('DOMContentLoaded', function () {
    const priceElement = document.getElementById('price');
    const refreshButton = document.getElementById('refreshButton');

    async function fetchBitcoinPrice() {
        try {
            const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
            const data = await response.json();
            const price = data.bpi.USD.rate;
            priceElement.textContent = `$${price}`;
        } catch (error) {
            priceElement.textContent = '가격을 불러오는 데 실패했습니다.';
        }
    }

    fetchBitcoinPrice(); // 초기 로드 시 가격 불러오기

    refreshButton.addEventListener('click', fetchBitcoinPrice); // 버튼 클릭 시 가격 새로 고침
});
