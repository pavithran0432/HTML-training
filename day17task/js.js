const employees = [
    { id: 1, name: "John", age: 28, department: "HR" },
    { id: 2, name: "Jane", age: 34, department: "Finance" },
    { id: 3, name: "Mike", age: 25, department: "IT" },
    { id: 4, name: "Emma", age: 30, department: "Marketing" },
    { id: 5, name: "Chris", age: 40, department: "Operations" },
    { id: 6, name: "Sophia", age: 29, department: "HR" },
    { id: 7, name: "Daniel", age: 32, department: "Finance" },
    { id: 8, name: "Olivia", age: 27, department: "IT" },
    { id: 9, name: "Liam", age: 35, department: "Sales" },
    { id: 10, name: "Noah", age: 26, department: "Logistics" },
];
const table = document.getElementById('data');
for (const values of employees) {
    table.innerHTML += `<tr>
        <td>${values.id}</td>
        <td>${values.name}</td>
        <td>${values.age}</td>
        <td>${values.department}</td>
    </tr>`;
}


const data = [
    { id: 1, name: "John", tasks: [{ taskId: 101, description: "Complete report", status: "Pending" }, { taskId: 102, description: "Review code", status: "Completed" },], },
    { id: 2, name: "Jane", tasks: [{ taskId: 103, description: "Prepare slides", status: "In Progress" }, { taskId: 104, description: "Team meeting", status: "Pending" },], },
];
const table1 = document.getElementById('data1');
for (const values1 of data) {
    for (const values2 of values1.tasks) {  
        table1.innerHTML += `<tr>
            <td>${values1.name}</td>
            <td>${values2.description}</td>
            <td>${values2.status}</td>
        </tr>`
    }
}