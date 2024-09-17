const students = [
  {
    name: "caio",
    age: 23,
  },
  {
    name: "thayna",
    age: 28,
  },
  {
    name: "zen",
    age: 2,
  },
  {
    name: "luana",
    age: 13,
  },
];

function validateStudents() {
  const studentsFilter = students.filter((students) => {
    return students.age > 18;
  });

  studentsFilter.forEach((students) => {
    const returnStudents = `
        O aluno ${students.name} pode entrar na festa.

        sua idade é de ${students.age} anos.
        `;
    console.log(returnStudents);
  });
}

const callFunction = validateStudents();
