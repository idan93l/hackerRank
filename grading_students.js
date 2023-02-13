function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 37) {
      if ((grades[i] + 1) % 5 === 0) {
        grades[i]++;
      }
      if ((grades[i] + 2) % 5 === 0) {
        grades[i] += 2;
      }
    }
  }
  return grades;
}
