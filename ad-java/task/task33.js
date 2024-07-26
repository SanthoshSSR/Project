function findEmployeeById(title, num){
    const findEmployee = title.find((name) => {
        return name.id == num
    })
    console.log(findEmployee);
}

const employees = [
    { id: 1, name: 'Alice', position: 'Manager' },
    { id: 2, name: 'Bob', position: 'Engineer' },
    { id: 3, name: 'Charlie', position: 'Technician' }
  ];

const name = findEmployeeById(employees, 2);
