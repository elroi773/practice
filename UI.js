
function showAlert() {
    alert("Welcome to the Neon Future!");
}

function createFloatingCircles() {
    const container = document.querySelector('.floating-elements');
    for (let i = 0; i < 30; i++) {
        let circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.left = Math.random() * window.innerWidth + 'px';
        circle.style.top = Math.random() * window.innerHeight + 'px';
        circle.style.animationDuration = Math.random() * 5 + 3 + 's';
        container.appendChild(circle);
    }
}
createFloatingCircles();
