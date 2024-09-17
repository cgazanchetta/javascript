const classroom = [
  {
    student: "caio",
    grade: 10,
  },
  {
    student: "thayna",
    grade: 8,
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

//o valor zero, é o valor inicial sempre que for começar o loop
const plusStudentsGrade = classroom.reduce((prev, current) => {
  return prev + current.grade;
}, 0);

console.log("a somatória das notas dessa classe é de: " + plusStudentsGrade);
