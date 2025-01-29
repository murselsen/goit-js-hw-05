console.log('~~~~~~~~~ Task 1: ~~~~~~~~~');

// Görev 1. Kullanıcı hesabı

const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Change code below this line
  getBalance() {
    // return balance;
    return this.balance;
  },
  getDiscount() {
    // return discount;
    return this.discount;
  },
  setDiscount(value) {
    // discount = value;
    this.discount = value;
  },
  getOrders() {
    // return orders;
    return this.orders;
  },
  addOrder(cost, order) {
    // balance -= cost - cost * discount;
    // orders.push(order);
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
