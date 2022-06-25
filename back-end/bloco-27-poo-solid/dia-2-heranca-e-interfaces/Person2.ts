import Person2 from './Exercicio1'

class Student extends Person2 {
  private _enrollment: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(n: string, bD: string, enrollment: string, examsGrades: number[], worksGrades: number[] ) {
    super(n, bD)
    this._enrollment = enrollment
    this._examsGrades = examsGrades
    this._worksGrades = worksGrades
  }

  
  public get enrollment() : string {
    return this._enrollment
  }
  public set enrollment(v : string) {
    if (v.length < 16 ){
      console.log('Enrollment need to be 16 lenght long');
      return
    }
    this._enrollment = v;
  }
  
  public get examsGrades() : number[] {
    return this._examsGrades
  }
  public set examsGrades(v : number[]) {
    if (v.length > 4 ) {
      console.log('max 4 exams grades');
      return
    } else this._examsGrades = v;
  }

  public get worksGrades() : number[] {
    return this._worksGrades
  }
  public set worksGrades(v : number[]) {
    if (v.length > 2 ) {
      console.log('max 4 work grades');
      return
    } else this._worksGrades = v;
  }

 /**
  * sumGrades
  */
 public sumGrades() {
  const sum = [...this._examsGrades, ...this._worksGrades].reduce((acc, a) => acc + a, 0);
  return sum
 }

  /**
  * sumAverageGrade
  */
   public sumAverageGrade() {
    const sum = this.sumGrades();
    const divider = [...this._examsGrades, ...this._worksGrades].length
    console.log(sum/ divider);
    return sum/ divider
   }
  
  /**
   * generateEnrollment
   */
  public generateEnrollment() {
    return `This is Enrollment ${this.enrollment}`
  }


}

const studentA = new Student('Filipe Braga', '1993-08-31T00:00:00.000Z', '1234567890123456', [1,2,3,4], [5,6])

studentA.sumAverageGrade()
console.log(studentA.generateEnrollment())

studentA.enrollment = 'abcdefghijklmnopqr'

console.log(studentA.generateEnrollment())

studentA.examsGrades = [9,9,9,9,9]
studentA.sumAverageGrade();

studentA.worksGrades = [5,6,7]
studentA.sumAverageGrade();

