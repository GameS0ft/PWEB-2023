let grades = [
    {subject: 'Matemática', grade: 8},
    {subject: 'Português', grade: 9},
    {subject: 'História', grade: 7},
    {subject: 'Geografia', grade: 8},
    {subject: 'Ciências', grade: 9}
];


let gradesChart = new Chart(document.querySelector('#gradesChart'), {
    type: 'bar',
    data: {
        labels: grades.map(grade => grade.subject),
        datasets: [{
            label: 'Nota',
            data: grades.map(grade => grade.grade),
            backgroundColor: 'darkgreen',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        animation: false
    }
});

let gradesPieChart = new Chart(document.querySelector('#gradesPieChart'), {
    type: 'pie',
    data: {
        labels: grades.map(grade => grade.subject),
        datasets: [{
            label: 'Nota',
            data: grades.map(grade => grade.grade),
            backgroundColor: [
                'red',
                'yellow',
                'green',
                'gray',
                'darkblue'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        animation: false
    }
});





grades.forEach((grade, index) => {
    let row = document.createElement('tr');
    let subjectCell = document.createElement('td');
    subjectCell.textContent = grade.subject;
    let gradeCell = document.createElement('td');
    gradeCell.textContent = grade.grade;
    gradeCell.style.cursor = 'pointer';
    gradeCell.addEventListener('click', () => {
    let newGrade = prompt(`Insira uma nova nota para ${grade.subject}:`);
    if (newGrade !== null && !isNaN(newGrade)) {
    newGrade = Number(newGrade);
    grades[index].grade = newGrade;
    gradeCell.textContent = newGrade;
    gradesChart.data.datasets[0].data[index] = newGrade;
    gradesChart.update();
    gradesPieChart.data.datasets[0].data[index] = newGrade;
    gradesPieChart.update();
    }
    });
    row.appendChild(subjectCell);
    row.appendChild(gradeCell);
    gradesTableBody.appendChild(row);
   });

   
   
   
   gradeCell.addEventListener('click', () => {
    let newGrade = prompt(`Insira uma nova nota para ${grade.subject}:`);
    if (newGrade !== null && !isNaN(newGrade)) {
    newGrade = Number(newGrade);
    grades[index].grade = newGrade;
    gradeCell.textContent = newGrade;
    gradesChart.data.datasets[0].data[index] = newGrade;
    gradesChart.update();
    gradesPieChart.data.datasets[0].data[index] = newGrade;
    gradesPieChart.update();
    updateSummary();
    }
   });


   
