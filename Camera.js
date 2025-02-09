class Camera {
    constructor(videoElement) {
        this.videoElement = videoElement;
        this.stream = null;
    }

    async start() {
        try {
            this.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
            this.videoElement.srcObject = this.stream;
        } catch (error) {
            console.error('카메라 접근 실패:', error);
        }
    }
}

const video = document.getElementById('video');
const captureButton = document.getElementById('capture');
const previewContainer = document.getElementById('previewContainer');
const selectedContainer = document.getElementById('selectedContainer');
const finalizeButton = document.getElementById('finalize');
const timerDisplay = document.getElementById('timer');
const finalCanvas = document.getElementById('finalResult');
const finalCtx = finalCanvas.getContext('2d');
const camera = new Camera(video);

camera.start();

let capturedImages = [];

captureButton.addEventListener('click', async () => {
    capturedImages = [];
    previewContainer.innerHTML = '';
    selectedContainer.innerHTML = '';
    
    for (let i = 8; i > 0; i--) {
        timerDisplay.textContent = `촬영 시작: ${i}초 후`;
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    timerDisplay.textContent = '';
    
    for (let i = 0; i < 8; i++) {
        timerDisplay.textContent = `${8 - i}장 남음`;
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2초 간격 촬영
        
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        const img = document.createElement('img');
        img.src = canvas.toDataURL('image/png');
        img.addEventListener('click', () => toggleSelection(img));
        previewContainer.appendChild(img);
        capturedImages.push(img);
    }
    
    timerDisplay.textContent = '촬영 완료! 사진을 선택하세요';
    finalizeButton.style.display = 'block';
});

function toggleSelection(img) {
    img.classList.toggle('selected');
    if (img.classList.contains('selected')) {
        const selectedImg = img.cloneNode();
        selectedImg.addEventListener('click', () => removeSelection(selectedImg, img));
        selectedContainer.appendChild(selectedImg);
    } else {
        removeSelection(null, img);
    }
    updateFinalPreview();
}

function removeSelection(selectedImg, img) {
    img.classList.remove('selected');
    if (selectedImg) selectedContainer.removeChild(selectedImg);
    updateFinalPreview();
}

function updateFinalPreview() {
    const selectedImages = document.querySelectorAll('.selected-container img');
    finalizeButton.style.display = selectedImages.length === 4 ? 'block' : 'none';
    if (selectedImages.length === 4) {
        finalCanvas.width = video.videoWidth * 2;
        finalCanvas.height = video.videoHeight * 2;
        finalCtx.clearRect(0, 0, finalCanvas.width, finalCanvas.height);
        selectedImages.forEach((img, index) => {
            const x = (index % 2) * video.videoWidth;
            const y = Math.floor(index / 2) * video.videoHeight;
            const image = new Image();
            image.src = img.src;
            image.onload = () => finalCtx.drawImage(image, x, y, video.videoWidth, video.videoHeight);
        });
        finalCanvas.style.display = 'block';
    }
}

finalizeButton.addEventListener('click', () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = finalCanvas.toDataURL('image/png');
    downloadLink.download = 'final_photo.png';
    downloadLink.click();
});