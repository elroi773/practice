let verses = [
    "요한복음 3:16 - 하나님이 세상을 이처럼 사랑하사...",
    "빌립보서 4:13 - 내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라.",
    "로마서 8:28 - 하나님을 사랑하는 자 곧 그의 뜻대로 부르심을 입은 자들에게는 모든 것이 합력하여 선을 이루느니라.",
    "시편 23:1 - 여호와는 나의 목자시니 내게 부족함이 없으리로다."
];

function getRandomVerse() {
    if (verses.length === 0) {
        document.getElementById("verse").textContent = "말씀이 없습니다. 추가해 주세요.";
        return;
    }
    let randomIndex = Math.floor(Math.random() * verses.length);
    document.getElementById("verse").textContent = verses[randomIndex];
}

function addVerse() {
    let newVerse = document.getElementById("newVerse").value.trim();
    if (newVerse && !verses.includes(newVerse)) {
        verses.push(newVerse);
        document.getElementById("newVerse").value = "";
        alert("새로운 말씀이 추가되었습니다!");
    } else {
        alert("이미 존재하는 말씀입니다 또는 입력이 비어있습니다.");
    }
}