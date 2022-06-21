class Person {

  _registration: number;
  _name: string;
  _testsGrades: number[]; // Could this use tuples? 
  _assignmentsGrade: number[]; 

  constructor(r: number, n: string, tG: number[], aG:number[]) {
    this._registration = r;
    this._name = n;
    this._testsGrades = tG;
    this._assignmentsGrade = aG;
  }

  testsSum(): number {
    let sum = 
      [...this._testsGrades, ...this._assignmentsGrade].reduce((acc, elem) => acc + elem , 0)

    return sum
  }

  testsAverage() {
    let sum = this.testsSum()
    let avg = sum / (this._testsGrades.length + this._assignmentsGrade.length)

    return avg
  }

}