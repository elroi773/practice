
async function fetchTourInfo() {
    const region = document.getElementById('region').value;
    const apiKey = 'NodXPnok9ADmPhzkN46aaAVKhdiro%2BkQ%2BRp5OUNjH%2BL1xy5gnw%2FcIKaTSo0zbRlxkwQDulKm9EGGhi1hVeM5cQ%3D%3D'; // 여기에 발급받은 API 키 입력
    const url = `https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=${apiKey}&MobileOS=ETC&MobileApp=TestApp&_type=json&areaCode=${getAreaCode(region)}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data.response.body.items.item);
    } catch (error) {
        console.error('데이터 가져오기 실패:', error);
    }
}

function getAreaCode(region) {
    const areaCodes = { '서울': 1, '부산': 6, '대구': 4, '인천': 2, '광주': 5, '대전': 3, '울산': 7, '세종': 8 };
    return areaCodes[region] || 1;
}

function displayResults(items) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    
    if (!items || items.length === 0) {
        resultsDiv.innerHTML = '<p>검색 결과가 없습니다.</p>';
        return;
    }
    
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `<h3>${item.title}</h3><p>${item.addr1 || '주소 정보 없음'}</p><img src="${item.firstimage || ''}" alt="이미지 없음" width="200">`;
        resultsDiv.appendChild(div);
    });
}
