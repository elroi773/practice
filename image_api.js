async function searchImages() {
    const query = document.getElementById('search-box').value;
    const accessKey = 'KGfnTDNkCmbxzENH7vqE-ye_M0zUtCuqrfrTheTiNhw'; // Unsplash API 키
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // 결과 초기화
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        
        if (data.results.length === 0) {
            resultsDiv.innerHTML = 'No images found';
            return;
        }

        data.results.forEach(photo => {
            const imgElement = document.createElement('img');
            imgElement.src = photo.urls.small;
            imgElement.alt = photo.alt_description || 'Unsplash Image';
            
            const container = document.createElement('div');
            container.classList.add('image-container');
            container.appendChild(imgElement);
            
            resultsDiv.appendChild(container);
        });
    } catch (error) {
        resultsDiv.innerHTML = `Error: ${error.message}`;
    }
}
