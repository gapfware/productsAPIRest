const { faker } = require('@faker-js/faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  async generate() {
    const limit = 100; // http://localhost:3000/products?size=100
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price(), 10),
        image: faker.image.url(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return this.products;
  }

  async findOne(id) {
    return this.products.find((item) => item.id === id);
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    const products = this.products[index];
    if (index === -1) {
      throw new Error('product not found');
    }

    this.products[index] = {
      ...products,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    this.products.splice(index, 1); //elimino 1 elemento a partir de la posicion indicada
    return this.products[index];
  }
}

module.exports = ProductsService;
