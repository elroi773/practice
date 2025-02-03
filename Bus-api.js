async function fetchBusRoute() {
    const busNumber = document.getElementById('busNumber').value;
    const apiKey = 'NodXPnok9ADmPhzkN46aaAVKhdiro%2BkQ%2BRp5OUNjH%2BL1xy5gnw%2FcIKaTSo0zbRlxkwQDulKm9EGGhi1hVeM5cQ%3D%3D'; // 여기에 발급받은 API 키 입력
    const url = `https://apis.data.go.kr/1613000/BusRouteInfoInqireService/getRouteNoList?serviceKey=${apiKey}&cityCode=25&routeNo=${busNumber}&_type=json`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const busRouteId = data.response.body.items.item[0].routeid;
        fetchBusStops(busRouteId);
    } catch (error) {
        console.error('노선 정보 가져오기 실패:', error);
    }
}

async function fetchBusStops(busRouteId) {
    const apiKey = 'NodXPnok9ADmPhzkN46aaAVKhdiro%2BkQ%2BRp5OUNjH%2BL1xy5gnw%2FcIKaTSo0zbRlxkwQDulKm9EGGhi1hVeM5cQ%3D%3D';
    const url = `https://apis.data.go.kr/1613000/BusSttnInfoInqireService/getRouteStationList?serviceKey=${apiKey}&busRouteId=${busRouteId}&_type=json`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data.response.body.items.item);
    } catch (error) {
        console.error('정류장 정보 가져오기 실패:', error);
    }
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
        div.innerHTML = `<h3>${item.nodenm}</h3><p>정류소 ID: ${item.nodeid}</p><p>위치: (${item.gpslati}, ${item.gpslong})</p>`;
        resultsDiv.appendChild(div);
    });
}