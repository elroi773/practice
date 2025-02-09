
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

    stop() {
        if (this.stream) {
            this.stream.getTracks().forEach(track => track.stop());
            this.videoElement.srcObject = null;
        }
    }
}

const video = document.getElementById('video');
const captureButton = document.getElementById('capture');
const previewContainer = document.getElementById('previewContainer');
const finalizeButton = document.getElementById('finalize');
const camera = new Camera(video);

camera.start();

let capturedImages = [];

// 8장 연속 촬영
captureButton.addEventListener('click', async () => {
    capturedImages = [];
    previewContainer.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        await new Promise(resolve => setTimeout(resolve, 500)); // 0.5초 간격 촬영
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
    finalizeButton.style.display = 'block';
});

function toggleSelection(img) {
    img.classList.toggle('selected');
    const selectedImages = document.querySelectorAll('.preview-container img.selected');
    finalizeButton.style.display = selectedImages.length === 4 ? 'block' : 'none';
}

finalizeButton.addEventListener('click', () => {
    const selectedImages = document.querySelectorAll('.preview-container img.selected');
    if (selectedImages.length !== 4) return;
    const finalCanvas = document.createElement('canvas');
    const ctx = finalCanvas.getContext('2d');
    finalCanvas.width = video.videoWidth * 2;
    finalCanvas.height = video.videoHeight * 2;
    selectedImages.forEach((img, index) => {
        const x = (index % 2) * video.videoWidth;
        const y = Math.floor(index / 2) * video.videoHeight;
        const image = new Image();
        image.src = img.src;
        image.onload = () => ctx.drawImage(image, x, y, video.videoWidth, video.videoHeight);
    });
    const downloadLink = document.createElement('a');
    downloadLink.href = finalCanvas.toDataURL('image/png');
    downloadLink.download = 'final_photo.png';
    downloadLink.click();
});
