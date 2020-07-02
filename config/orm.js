const connection = require("../config/connection.js");

const orm = {

    selectAll: async function(table, cb) {
        let queryString = "SELECT * FROM ??";
        let insert = table;

        connection.query(queryString, insert, (err, result) => {
            if(err) throw err;
            cb(result);
        });
    },

    insertOne: async function(table, columns, values, cb) {
        let queryString = "INSERT INTO ?? (??) VALUES (?)";

        connection.query(queryString, [table, columns, values], (err, result) => {
            if(err) throw err;
            cb(result);
        });
    },

    updateOne: async function(table, columns, values, cb) {
        let queryString = "UPDATE ?? SET ?? = 1 WHERE id = ?";

        connection.query(queryString, [table, columns, values], (err, result) => {
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;