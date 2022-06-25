import Person2 from "./Person";
import Subject from './Subject'
import Employee from "./IEmployee";


export default class Teacher extends Person2 implements Employee {
  private _subject: Subject;
  _registration: string;
  _salary: number;
  _admissionDate: Date;

  constructor(name: string, birthDate: string, salary: number, subject: Subject) {
    super(name, birthDate)
    this._subject = subject;
    this._registration = this.generateRegistration();
    this._salary = salary
    this._admissionDate = new Date()

  }

  generateRegistration(): string {
    return 'This is hard code Reg';
  }

  
}