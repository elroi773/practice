const upload = document.getElementById('upload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let img = new Image();

upload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
});

img.onload = () => {
    canvas.width = img.width / 2;
    canvas.height = img.height / 2;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

function applyFilter(filter) {
    if (!img.src) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    switch (filter) {
        case 'grayscale':
            ctx.filter = 'grayscale(100%)';
            break;
        case 'invert':
            ctx.filter = 'invert(100%)';
            break;
        case 'blur':
            ctx.filter = 'blur(5px)';
            break;
        case 'sepia':
            ctx.filter = 'sepia(100%)';
            break;
        case 'brightness':
            ctx.filter = 'brightness(150%)';
            break;
        case 'contrast':
            ctx.filter = 'contrast(200%)';
            break;
        case 'none':
            ctx.filter = 'none';
            break;
    }
    ctx.drawImage(canvas, 0, 0);
}