
const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAllBurgers((data) => {
        let burgers = data.map(({ burger_name, id, devoured }) => ({
            burger_name: burger_name,
            id: id,
            devoured: devoured
        }));
        let burgerObject = { burgers: burgers };
        res.render("index", burgerObject);
    });
});

router.post("/api/new", (req, res) => {
    let burgerName = req.body.burger_name;

    burger.insertBurger(burgerName, (result) => {
        res.json( { id: result.insertId } );
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let devouredId = req.params.id;

    burger.updateBurger(devouredId, (result) => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;
