// Scroll Animation
const scrollElement = document.getElementById('scroll-animate');
window.addEventListener('scroll', () => {
    const rect = scrollElement.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        scrollElement.classList.remove('hidden');
        scrollElement.style.opacity = '1';
    }
});

// Expandable Box
const expandable = document.getElementById('expandable-box');
expandable.addEventListener('click', () => {
    expandable.classList.toggle('open');
});

// Random Animation Trigger
const animations = [
    () => alert('Random Animation 1: Simple Alert!'),
    () => {
        expandable.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        expandable.textContent = 'Color Changed!';
    },
    () => {
        const randomSize = Math.random() * 2 + 1;
        expandable.style.transform = `scale(${randomSize})`;
        setTimeout(() => expandable.style.transform = 'scale(1)', 1000);
    }
];

const triggerButton = document.getElementById('trigger-random');
triggerButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    animations[randomIndex]();
});