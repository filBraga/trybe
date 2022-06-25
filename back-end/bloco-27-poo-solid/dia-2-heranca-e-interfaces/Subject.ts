export default class Subject {
  private _name: string;


  constructor(n: string) {
    this._name = n
  }

  
  public get name() : string {
    return this._name
  }
  
  public set name(v : string) {
    if (v.length < 3) {
      console.log('name must be > 3');
      return
    }
    this._name = v;
  }
}

const subjectA = new Subject('TypeScript')

console.log(subjectA);