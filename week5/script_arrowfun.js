function processMarks() {

    let students = [
        {name: "A", marks: 35},
        {name: "B", marks: 78},
        {name: "C", marks: 42},
        {name: "D", marks: 90}
    ];

    // map() - get all marks
    let marks = students.map(student => student.marks);

    // reduce() - calculate total marks
    let total = marks.reduce((sum, mark) => sum + mark, 0);

    // Calculate average
    let average = total / marks.length;

    // filter() - get students who passed
    let passed = students.filter(student => student.marks >= 40);

    // Convert passed students into names
    let passedNames = passed.map(student => student.name);

    document.getElementById("result").innerHTML =
        "Class Average = " + average + "<br>" +
        "Passed Students = " + passedNames.join(", ");
}