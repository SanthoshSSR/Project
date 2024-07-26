function findStudentByName(students, name){
  const findStudent = students.find((student) => {
    return student.name === name
  })
  console.log(findStudent);
}

const students = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 23 }
  ];

const find = findStudentByName(students, 'Bob')