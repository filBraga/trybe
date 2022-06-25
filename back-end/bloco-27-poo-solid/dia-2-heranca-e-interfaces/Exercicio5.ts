import Person2 from "./Exercicio1";
import Subject from './Exercicio4'
import Employee from "./Exercicio3";

class Teacher extends Person2 implements Employee {
  private _subject: Subject;
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthDate: string, salary: number, subject: Subject) {
    super(name, birthDate)
    this._subject = subject;
    this._registration = this.generateRegistration()
    this._salary = salary
    this._salary =
    this._admissionDate =

  }

  generateRegistration(): string {
    return 'This is hard code Reg';
  }

  
}