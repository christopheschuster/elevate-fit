/*  
   Filename: complexCode.js 
   Content: This code simulates a complex e-commerce website with a user interface, shopping cart functionality, and order processing logic. It includes various features such as user authentication, product search, adding items to the cart, applying discounts, processing payments, and generating order invoices. The code is designed to be modular and uses object-oriented programming principles. 
*/

// Import required modules
const readline = require('readline');

// Define classes and functions

class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
  
  authenticate(password) {
    return this.password === password;
  }
}

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }
  
  addItem(product, quantity) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }
  
  removeItem(productId) {
    const itemIndex = this.items.findIndex(item => item.product.id === productId);
    
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  }
  
  getTotal() {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
  
  applyDiscount(discount) {
    const discountAmount = this.getTotal() * discount;
    return this.getTotal() - discountAmount;
  }
  
  checkout(paymentMethod) {
    // Simulate payment processing logic
    console.log(`Processing payment via ${paymentMethod}...`);
    console.log(`Payment processed successfully! Generating order invoice...`);
    
    const order = new Order(this.items, this.getTotal());
    order.generateInvoice();
    
    this.items = []; // Empty the cart after checkout
  }
}

class Order {
  constructor(items, total) {
    this.items = items;
    this.total = total;
  }
  
  generateInvoice() {
    // Simulate generating an invoice
    console.log('Order Invoice:');
    console.log('----------------------------');
    
    for (const item of this.items) {
      console.log(`${item.product.name} - Quantity: ${item.quantity}, Price: ${item.product.price}`);
    }
    
    console.log(`Total: ${this.total}`);
    console.log('----------------------------');
  }
}

// Simulate an e-commerce website

const users = [
  new User('john', 'password123', 'john@example.com'),
  new User('jane', 'password456', 'jane@example.com')
];

const products = [
  new Product(1, 'Shirt', 20),
  new Product(2, 'Pants', 30),
  new Product(3, 'Shoes', 50)
];

const shoppingCart = new ShoppingCart();

// Handle user input

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Username: ', (username) => {
  rl.question('Password: ', (password) => {
    const user = users.find(u => u.username === username && u.authenticate(password));
    
    if (user) {
      console.log(`Welcome, ${user.username}!`);
      
      // Simulate product search and adding items to the cart
      console.log('Available Products:');
      for (const product of products) {
        console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`);
      }
      
      rl.question('Enter the product ID you want to add to cart: ', (productId) => {
        const product = products.find(p => p.id === parseInt(productId));
        
        if (product) {
          rl.question('Enter the quantity: ', (quantity) => {
            shoppingCart.addItem(product, parseInt(quantity));
            console.log('Item added to cart!');
            
            // Simulate discount and checkout process
            rl.question('Apply discount? (Y/N): ', (applyDiscount) => {
              if (applyDiscount.toUpperCase() === 'Y') {
                rl.question('Enter the discount rate (e.g. 0.1 for 10%): ', (discountRate) => {
                  const discountedTotal = shoppingCart.applyDiscount(parseFloat(discountRate));
                  console.log(`Discounted Total: $${discountedTotal}`);
                  
                  rl.question('Select payment method (CreditCard/PayPal): ', (paymentMethod) => {
                    shoppingCart.checkout(paymentMethod);
                    rl.close();
                  });
                });
              } else {
                rl.question('Select payment method (CreditCard/PayPal): ', (paymentMethod) => {
                  shoppingCart.checkout(paymentMethod);
                  rl.close();
                });
              }
            });
          });
        } else {
          console.log('Invalid product ID!');
          rl.close();
        }
      });
    } else {
      console.log('Invalid username or password!');
      rl.close();
    }
  });
});

rl.on('close', () => {
  console.log('Thank you for shopping with us!');
});