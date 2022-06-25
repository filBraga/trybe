export default interface IEmployee {
  _registration: string;
  _salary: number;
  _admissionDate: Date;

  generateRegistration(): string;
}