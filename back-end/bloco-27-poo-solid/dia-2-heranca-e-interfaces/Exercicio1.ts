class Person2 {

  private _name: string;
  private _birthDate: string;

  constructor(n: string, bD: string) {
    this._name = n;
    this._birthDate = bD;
  }

  public get name() : string {
    return this._name
  }

  public set name(n : string) {
    if (n.length > 3) {
      this._name = n;
    } else console.log('Name must be 3 length long');

  }

  public get birthDate() : string {
    return this._birthDate
  }

  // https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
  // YYYY-MM-DDT00:00:00.000Z
  public set birthDate(bD : string) {
    console.log(`Input is: ${bD}`);

    const today = new Date();
    console.log(`Today is: ${today}`);

    const birthDate = new Date(bD);
    console.log(`birthDate is: ${birthDate}`);
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    console.log(`Age is: ${age}`);
    
    if (age >= 0 && age < 120) {
      this._birthDate = bD;
    } else console.log('Date is Wrong')
  }
  
  variablesMethod(): string {
    return `Name is: ${this._name} and Birth Date: ${this._birthDate}`
  }

}

const personA: Person2 = new Person2('Fil', '1993-08-31T00:00:00.000Z')

// npm init -y
// npx tsc --init
// npx ts-node myScript.ts
// sudo npm install -g ts-node

console.log(personA.variablesMethod());

personA.name = 'F'; // This will get an error
personA.name = 'Filipe'; //

console.log(personA.variablesMethod());

personA.birthDate = '2222-08-31T00:00:00.000Z' // This will get an error

console.log(personA.variablesMethod());
