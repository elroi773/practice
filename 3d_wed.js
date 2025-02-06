const gallery = document.getElementById("gallery");
const images = [
    "https://source.unsplash.com/200x200?nature",
    "https://source.unsplash.com/200x200?city",
    "https://source.unsplash.com/200x200?tech",
    "https://source.unsplash.com/200x200?art",
    "https://source.unsplash.com/200x200?space",
    "https://source.unsplash.com/200x200?ocean"
];

images.forEach((src, i) => {
    let img = document.createElement("div");
    img.className = "image";
    img.style.backgroundImage = `url(${src})`;
    let angle = (i / images.length) * 360;
    let rad = (angle * Math.PI) / 180;
    let x = 200 * Math.cos(rad); /* 반경 축소 */
    let z = 200 * Math.sin(rad);
    img.style.transform = `rotateY(${angle}deg) translateZ(200px)`; /* translateZ 줄임 */
    gallery.appendChild(img);
});

let startX, currentX = 0;
let rotating = false;

document.addEventListener("mousedown", (e) => {
    rotating = true;
    startX = e.clientX;
});

document.addEventListener("mousemove", (e) => {
    if (rotating) {
        let deltaX = e.clientX - startX;
        currentX += deltaX * 0.5;
        gallery.style.transform = `rotateY(${currentX}deg) rotateX(-10deg)`;
        startX = e.clientX;
    }
});

document.addEventListener("mouseup", () => {
    rotating = false;
});
