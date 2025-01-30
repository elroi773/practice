document.addEventListener("DOMContentLoaded", loadSavedData);

        function addData() {
            const input = document.getElementById("dataInput");
            const value = input.value.trim();
            if (value === "") return;
            
            saveToLocalStorage(value);
            appendToList(value);
            input.value = "";
        }

        function saveToLocalStorage(value) {
            let savedData = JSON.parse(localStorage.getItem("data")) || [];
            savedData.push(value);
            localStorage.setItem("data", JSON.stringify(savedData));
        }

        function loadSavedData() {
            let savedData = JSON.parse(localStorage.getItem("data")) || [];
            savedData.forEach(appendToList);
        }

        function appendToList(value) {
            const li = document.createElement("li");
            li.textContent = value;
            document.getElementById("dataList").appendChild(li);
        }

        function fetchData() {
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
                .then(response => response.json())
                .then(data => {
                    data.forEach(item => appendToList(item.title));
                })
                .catch(error => console.error("Error fetching data:", error));
        }
    