const classroom = [
  {
    student: "caio",
    grade: 10,
  },
  {
    student: "thayna",
    grade: 10,
  },
  {
    student: "luana",
    grade: 3,
  },
  {
    student: "karina",
    grade: 6.5,
  },
  {
    student: "nycole",
    grade: 7,
  },
];

//find retorna um unico valor
const findPerfectStudentGrade = classroom.find((student) => {
  if (student.grade === 10) {
    return student;
  }
});

console.log(findPerfectStudentGrade);

//filter retorna uma lista

// const findPerfectStudentGrade = classroom.filter((student) => {
//     if (student.grade === 10) {
//       return student;
//     }
//   });

//   console.log(findPerfectStudentGrade);
