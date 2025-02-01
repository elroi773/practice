
async function searchImages() {
    const query = document.getElementById('search-box').value;
    const accessKey = 'YOUR_UNSPLASH_ACCESS_KEY'; // Unsplash API 키 입력
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    
    data.results.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = photo.urls.small;
        
        const container = document.createElement('div');
        container.classList.add('image-container');
        container.appendChild(imgElement);
        
        resultsDiv.appendChild(container);
    });
}
