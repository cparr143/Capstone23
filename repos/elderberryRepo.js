let fs = require('fs');
const FILE_NAME = './assets/elderberry.json';

let elderberryRepo = {
    get: function(resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(JSON.parse(data));
            }
        });
    },
    getById: function (id, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                let elderberry = JSON.parse(data).find(p => p.id == id);
                resolve(elderberry);
            }
        });
    }, 
    search: function (searchObject, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                let elderberry = JSON.parse(data);
                if (searchObject) {
                    elderberry = elderberry.filter(
                        p => (searchObject.id ? p.id == searchObject.id : true) &&
                        (searchObject.name ? p.name.toLowerCase().indexOf(searchObject.name.toLowerCase()) >= 0 : true));
                }
                resolve(elderberry);
            }
        });
    },
    insert: function (newData, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                let elderberry = JSON.parse(data);
                elderberry.push(newData);
                fs.writeFile(FILE_NAME, JSON.stringify(elderberry), function (err) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(newData);
                    }
                });
            }
        });
    }
};

module.exports = elderberryRepo;