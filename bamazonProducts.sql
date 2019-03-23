DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(30),
    price INTEGER(10), -- cost to customer
    stock_quantity INTEGER(10) -- (how much of the product is available in stores)
);

-- Insert a set of records.
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Lipstick", "Cosmetics", 10, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Book", "Entertainment", 5, 18);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Movie", "Entertainment", 12, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Shirt", "Clothes", 8, 22);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Sneakers", "Shoes", 10, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Purse", "Accessories", 15, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Pillows", "Bedding", 20, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Toaster", "Appliances", 28, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Blanket", "Bedding", 15, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Boardgame", "Entertainment", 20, 8);

USE bamazon_db;
SELECT * FROM products;