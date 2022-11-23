/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  if (sandwiches.length === 0 || students.length === 0) {
    return 0;
  }
  const deepClone = JSON.parse(JSON.stringify(students));
  deepClone.sort((a, b) => a - b);
  if (
    deepClone[0] === deepClone[deepClone.length - 1] &&
    deepClone[0] !== sandwiches[0]
  ) {
    return deepClone.length;
  }
  for (let i = 0; i < sandwiches.length; i++) {
    if (students[0] === sandwiches[0]) {
      sandwiches.shift();
      students.shift();
    } else {
      const student = students.shift();
      if (student !== undefined) {
        students.push(student);
      }
    }
  }
  return countStudents(students, sandwiches);
};
