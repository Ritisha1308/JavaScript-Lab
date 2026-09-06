// Array to store student records
let students = [];

function addStudent() {

    let name = document.getElementById("name").value;
    let marks = parseFloat(document.getElementById("marks").value);

    // Input validation
    if (name === "" || isNaN(marks) || marks < 0 || marks > 100) {
        alert("Please enter a valid name and marks between 0 and 100");
        return;
    }

    // Create student object
    let student = {
        id: students.length + 1,
        name: name,
        marks: marks
    };

    // Add student to the array
    students.push(student);

    // Display everything
    displayStudents();

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
    document.getElementById("name").focus();
}

function displayStudents() {

    let table = document.getElementById("marksTable");

    // Display table headings
    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Result</th>
        </tr>
    `;

    // forEach() - Display every student as a table row
    students.forEach(function(student) {

        let resultText = student.marks >= 35
            ? `<span class="pass">Pass</span>`
            : `<span class="fail">Fail</span>`;

        table.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.marks}</td>
                <td>${resultText}</td>
            </tr>
        `;
    });

    // reduce() - Calculate total and average marks
    let totalMarks = students.reduce(function(sum, student) {
        return sum + student.marks;
    }, 0);

    let averageMarks = students.length > 0 ? totalMarks / students.length : 0;

    // Display result
    document.getElementById("result").innerHTML = `
        <div>Total Students: <b>${students.length}</b></div>
        <div>Total Marks: <b>${totalMarks.toFixed(2)}</b></div>
        <div>Average Marks: <b>${averageMarks.toFixed(2)}</b></div>
    `;

    // map() - Create student summary list
    let summary = document.getElementById("summary");
    summary.innerHTML = "";

    students.map(function(student) {

        summary.innerHTML += `
            <li><span>${student.name}</span><span>${student.marks} marks</span></li>
        `;
    });

    // filter() - Find distinction holders
    let distinctionBox = document.getElementById("distinction");
    distinctionBox.innerHTML = "";

    let distinctionHolders = students.filter(function(student) {
        return student.marks > 75;
    });

    distinctionHolders.forEach(function(student) {

        distinctionBox.innerHTML += `
            <li><span>${student.name}</span></li>
        `;
    });

    // Case Study - Find highest and lowest marks (handles ties - shows all names)
    let extremesBox = document.getElementById("marksExtremes");

    if (students.length === 0) {
        extremesBox.innerHTML = `No students added yet.`;
    } else {

        // reduce() - find the highest and lowest marks value in the array
        let highestMarks = students.reduce(function(max, student) {
            return student.marks > max ? student.marks : max;
        }, students[0].marks);

        let lowestMarks = students.reduce(function(min, student) {
            return student.marks < min ? student.marks : min;
        }, students[0].marks);

        // filter() - get every student who scored the highest / lowest marks
        let topStudents = students.filter(function(student) {
            return student.marks === highestMarks;
        });

        let lowStudents = students.filter(function(student) {
            return student.marks === lowestMarks;
        });

        // map() - pull out just the names of those students
        let topNames = topStudents.map(function(student) {
            return student.name;
        }).join(", ");

        let lowNames = lowStudents.map(function(student) {
            return student.name;
        }).join(", ");

        extremesBox.innerHTML = `
            <div>Highest Marks (${highestMarks}): <b>${topNames}</b></div>
            <div>Lowest Marks (${lowestMarks}): <b>${lowNames}</b></div>
        `;
    }
}

function removeLastStudent() {

    // pop() - remove the most recently added student from the array
    if (students.length === 0) {
        alert("No students to remove");
        return;
    }

    let removed = students.pop();
    displayStudents();
}