function showMessage() {
    alert('플립 서재에 오신 것을 환영합니다!');
}

const books = [
    "자기 혁신의 기술",
    "성공하는 사람들의 7가지 습관",
    "배움의 발견",
    "심리학이 이렇게 쓸모 있을 줄이야"
];

function displayBooks() {
    const bookList = document.getElementById("book-list");
    books.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.textContent = book;
        bookList.appendChild(bookElement);
    });
}

displayBooks();