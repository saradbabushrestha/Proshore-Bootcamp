// add items to a shopping cart,
// calculate total price,
// calculate discounts,
//and accept payment by cash.

const cMachine = {
  cart: [],
  items: [
    { name: "Phone", price: 300 },
    { name: "Smart TV", price: 120 },
    { name: "Gaming COnsole", price: 250 },
  ],
  addItem(name, price) {
    let product = this.items.find((item) => item.name === name);
    if (product) {
      this.cart.push(product);
      console.log(`${product.name} added to cart`);
    } else {
      console.log("Product not found");
    }
  },
  calculateTotal() {
    let total = 0;
    this.cart.forEach((item) => (total += item.price));
    return total;
  },
  pay(amount) {
    let total = this.calculateTotal();
    if (total > 500) {
      total -= total * 0.1;
      console.log(`You got 10% discount so your total amount is ${total}`);
    }
    if (amount >= total) {
      let change = amount - total;
      console.log(`Your change is ${change}`);
    } else {
      console.log("Sorry insufficient amount");
    }
  },
};
cMachine.addItem("Phone");
cMachine.addItem("Smart TV");
console.log(cMachine.calculateTotal());
cMachine.pay(700);
