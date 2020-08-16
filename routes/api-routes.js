var express = require("express");

var router = express.Router();

var burger = require("../models/burger")

router.get("/", function (req, res) {
    burger.all(function (burgerData) {
        var hbsObj = {
            burgers: burgerData
        }
        console.log(hbsObj)
        res.render("index", hbsObj);
    })
})

router.post("/api/burgers", (req, res) => {
    burger.create([
        "name"
    ],
        [req.body.name], 
        function (result) {
            res.json({ id: result.insertId });
        })

})


router.put('/api/burgers/:id', (req, res) => {
    var condition = "id=" + req.params.id
    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

});



module.exports = router;