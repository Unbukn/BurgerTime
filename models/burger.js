var orm = require("../config/orm.js")

// define the burger model using calls to orm functions
var burger = {
    all: function (cb) {
        orm.all("burgers", function (r) {
            cb(r)
        })
    },
    create: function (column, value, cb) {
        orm.create("burgers", column, value, function (result) {
            cb(result)
        })
    },
    update: function (bool, condition, cb) {
        orm.update("burgers", bool, condition, function (result) {
            cb(result)
        })
    }
}

module.exports = burger;