const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

const p = path.join(rootDir, "data", "services.json");

const getServicesFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  })
}

module.exports = class Service {
  constructor(n) {
    this.name = n;
  }

  static fetchAll(cb) {
    getServicesFromFile(cb)
  }  

  static fetchById(id, cb) {
    getServicesFromFile(services => {
      const service = services.find(s => s.id === id)
      cb(service)
    })
  }
}
