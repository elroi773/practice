const today = new Date();
const targetDate = new Date('2024-11-14');

const diffTime = targetDate - today;
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


document.getElementById('countdown').innerHTML = `D-${diffDays}`;
