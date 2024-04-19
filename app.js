let sqlite3 = require("sqlite3").verbose();
// Connect to the database
let db = new sqlite3.Database("db/crudShop.db", (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log("Connected to the crudShop database.");
});

// // ! Drop table if exists
// let sqlDropTable = `DROP TABLE IF EXISTS products`;
// db.run(sqlDropTable, (err) => {
//   if (err) {
//     console.error(err.message);
//     throw err;
//   }
//   console.log("Table products dropped.");
// });

// // ! Create table
// let sqlCreateTable = `CREATE TABLE products (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT,
//     price INTEGER
// )`;
// db.run(sqlCreateTable, (err) => {
//   if (err) {
//     console.error(err.message);
//     throw err;
//   }
//   console.log("Table products created.");
// });

// ! Insert data products
// let sqlInsert = `INSERT INTO products (name, price) VALUES (?, ?)`;
// let products = [
//   ["Apple", 100],
//   ["Banana", 50],
//   ["Cherry", 150],
// ];

// products.forEach((product) => {
//   db.run(sqlInsert, product, (err) => {
//     if (err) {
//       console.error(err.message);
//       throw err;
//     }
//   });
// });

// // ! Select data
// let sqlSelect = `SELECT * FROM products`;
// db.all(sqlSelect, [], (err, rows) => {
//   if (err) {
//     console.error(err.message);
//     throw err;
//   }
//   rows.forEach((row) => {
//     console.log(row);
//   });
// });

// // ! Truncate table
// let sqlTruncateTable = `DELETE FROM products`;
// db.run(sqlTruncateTable, (err) => {
//   if (err) {
//     console.error(err.message);
//     throw err;
//   }
//   console.log("Table products truncated.");
// });
// ! Drop table if exists
// let sqlDropTableCategories = `DROP TABLE IF EXISTS categories`;
// db.run(sqlDropTableCategories, (err) => {
//   if (err) {
//     console.error(err.message);
//     throw err;
//   }
//   console.log("Table categories dropped.");
// });

// ! create table categories esta relacionada con la tabla products
// let sqlCreateTableCategories = `CREATE TABLE categories (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT,
//     product_id INTEGER,
//     FOREIGN KEY (product_id) REFERENCES products (id)
// )`;

// db.run(sqlCreateTableCategories, (err) => {
//   if (err) {
//     console.error(err.message);
//     throw err;
//   }
//   console.log("Table categories created.");
// });

// ! Insert data categories

// let sqlInsertCategories = `INSERT INTO categories (name, product_id) VALUES (?, ?)`;
// let categories = [
//   ["Fruit", 6],
//   ["Fruit", 7],
//   ["Verdura", 9],
// ];

// categories.forEach((category) => {
//   db.run(sqlInsertCategories, category, (err) => {
//     if (err) {
//       console.error(err.message);
//       throw err;
//     }
//   });
// });

// ! Select data categories join products

let sqlSelectCategories = `SELECT categories.name as category, products.name as product FROM categories JOIN products ON categories.product_id = products.id`;

db.all(sqlSelectCategories, [], (err, rows) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  rows.forEach((row) => {
    console.log(row);
  });
});

