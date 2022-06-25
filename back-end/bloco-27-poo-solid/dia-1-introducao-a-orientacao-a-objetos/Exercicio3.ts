class Customer {
  _name: string;

  constructor(n: string) {
    this._name = n;
  }

}

class Order {
  name: string;
  price: number;

  constructor(n: string, p:number) {
    this.name = n;
    this.price = p;
  }

  method(){

  }

}

class ClientOrder {
  _customer: Customer;
  _order: Order;

  constructor(c: Customer, o: Order) {
    this._customer = c;
    this._order = o;
  }

}