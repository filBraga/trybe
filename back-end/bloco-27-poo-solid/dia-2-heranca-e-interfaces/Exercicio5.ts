import Person2 from "./Exercicio1";
import Subject from './Exercicio4'
import Employee from "./Exercicio3";

class Teacher extends Person2 implements Employee {
  private _subject: Subject;
  private _enrollment: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(n: string, bD: string, e: string, eG: number[], wG: number[], s: Subject) {
    super(n, bD)
    this._subject = s
    this._enrollment = e
    this._examsGrades = eG
    this._worksGrades = wG
  }

  
  public get subject() : string {
    return this._subject
  }
  
  public set subject(v : Subject) {
    this._subject = v;
  }
  
}