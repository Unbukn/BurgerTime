var connection = require("../config/connection.js");
var orm = {
    // query to return all rows from the DB
    all: function (input, callBack) {
        let queryString = "SELECT * FROM " + input + ";";
        connection.query(queryString, (err, result) => {
            if (err) throw err
            callBack(result);
        })
    },
    // insert data into the table
    create: function (table, column, value, callBack) {
        let string = column.toString()
        let queryString = "INSERT INTO "+ table+ "(" + string + ")" + "VALUES (?)"
        connection.query(queryString, value, function (err, result) {
            if (err) throw err
            callBack(result)
        })
    },

    update: function (table, boolean, condition, callBack){
        let queryString = "UPDATE " + table + " SET " + objToSql(boolean) +" where " + condition;
        connection.query(queryString, function(err, result){
            if(err) throw err
            callBack(result)
        })
    }
}

function objToSql(ob){
    var arr = [];
    for(var key in ob){
        var value = ob[key]
        if (Object.hasOwnProperty.call(ob, key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            arr.push(key+"=" + value);
        }
    }
    return arr.toString();
}


module.exports = orm;