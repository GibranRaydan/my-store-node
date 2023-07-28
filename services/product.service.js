
import boom from "@hapi/boom";
import { faker } from "@faker-js/faker";
import { sequelizeClient } from "../libs/sequelize.js";

class ProductService {
    constructor() {
        this.products = [];
        this.generate();
    }

    generate() {
        const limit = 100;
        for (let i = 0; i < limit; i++) {
            this.products.push({
                id: faker.string.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price()),
                image: faker.image.url(),
                isBlocked: faker.datatype.boolean(),
            });
        }
        return this.products;
    }

    async create(data) {
        const newProduct = {
            id: faker.string.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }

    async find() {
        const query = 'SELECT * from tasks';
        const [data] = await sequelizeClient.query(query);
        return data;
    }

    async findOne(id) {
        const product = this.products.find(item => item.id === id);
        if(!product) {
            throw boom.notFound('product not found');
        }
        if(product.isBlocked) {
            throw boom.conflict('product is blocked');

        } 
        return product;
        
    }

    async update(id, changes) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('product not found');
        }
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }

    async delete(id) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('product not found');
        }
        this.products.splice(index, 1);
        return id;

    }
}

export { ProductService };