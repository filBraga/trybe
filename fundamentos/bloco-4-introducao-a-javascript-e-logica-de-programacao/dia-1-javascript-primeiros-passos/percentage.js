//What is the grade?

let grade = 66;

if (grade > 100){
  console.log("Please enter a number between 0 and 100");
}  else if (grade >= 90 && grade <= 100) {
  console.log("a");
} else if (grade >= 80 && grade <= 89) {
  console.log("b");
} else if (grade >= 70 && grade <= 79) {
  console.log("c");
} else if (grade >= 60 && grade <= 69) {
  console.log("d");
} else if (grade >= 50 && grade <= 59) {
  console.log("e");
} else if (grade < 50 && grade > 0) {
  console.log("f");
} else {
  console.log("Please enter a number between 0 and 100")
}