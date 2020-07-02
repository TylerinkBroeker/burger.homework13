const orm = require("../config/orm.js");

const burger = {
    selectAllBurgers: async function(cb) {
        await orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertBurger: async function(values, cb) {
        await orm.insertOne("burgers", "burger_name", values, (res) => {
            cb(res);
        });
    },
    updateBurger: async function(values, cb) {
        await orm.updateOne("burgers", "devoured", values, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;