const { fileLoader } = require("ejs");
const fs = require("fs");
const path = require("path");
const { get } = require("../routes/admin");
const p = path.join(
    path.dirname(require.main.filename),
    "data",
    "products.json"
  );

const getProductsFromfile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromfile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromfile(cb);
  }
};