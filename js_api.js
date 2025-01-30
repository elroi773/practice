
function fetchUsers() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            document.getElementById("userList").innerHTML = "";
            data.results.forEach(user => appendUser(user));
        })
        .catch(error => console.error("Error fetching data:", error));
}

function appendUser(user) {
    const li = document.createElement("li");
    li.className = "user-item";
    li.innerHTML = `
        <img src="${user.picture.thumbnail}" alt="Profile Image">
        <p><strong>${user.name.first} ${user.name.last}</strong></p>
        <p>${user.email}</p>
    `;
    document.getElementById("userList").appendChild(li);
}
