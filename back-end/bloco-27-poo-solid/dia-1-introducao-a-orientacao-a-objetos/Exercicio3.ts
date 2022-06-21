class Customer {
  _name: string;

  constructor(n: string) {
    this._name = n;
  }

}

class Order {
  name: string;
  price: number;

  constructor(n: string) {
    this.name = n;
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