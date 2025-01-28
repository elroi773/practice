const rows = [
    { firstName: "Joe", lastName: "Blogs", level: "Senior", age: 21 },
    { firstName: "Anna", lastName: "Smith", level: "Junior", age: 25 },
    { firstName: "Tom", lastName: "Brown", level: "Mid", age: 30 },
    { firstName: "Lucy", lastName: "White", level: "Junior", age: 22 },
];

let sortOrder = "";
let sortField = "firstName";
let prevField = "firstName";

const sort = (arr, field) => {
    sortOrder = prevField === field && sortOrder === "asc" ? "desc" : "asc";
    prevField = field;

    return arr.sort((a, b) => {
        const valA = a[field];
        const valB = b[field];
        if (valA == null || valB == null) return 0; 
        return sortOrder === "asc" ? (valA > valB ? 1 : -1) : valA < valB ? 1 : -1;
    });
};

const sortRows = (field, element) => {
    sortField = field;

    const tbody = document.querySelector("tbody");
    tbody.innerHTML = sort(rows, field)
        .map(
            (row) =>
                `<tr>
                    <td>${row.firstName}</td>
                    <td>${row.lastName}</td>
                    <td>${row.level}</td>
                    <td>${row.age}</td>
                </tr>`
        )
        .join("");

    document.querySelectorAll("thead th").forEach((th) => {
        th.classList.remove("active");
        th.querySelector("i").className = "";
    });

    if (element) {
        element.classList.add("active");
        element.querySelector("i").className = `fa-solid fa-arrow-${sortOrder === "asc" ? "up" : "down"}`;
    }
};

sortRows("firstName", document.querySelector("thead th:first-child"));
