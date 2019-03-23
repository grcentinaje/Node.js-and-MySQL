var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {

  if (err) throw err;
  console.log('connected as id ' + connection.threadId);

  read();
  start();

});

function start() {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
  
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function () {
            var choiceArray = [];
            for (var i = 0; i < res.length; i++) {
              choiceArray.push(res[i].product_name);
            }
            return choiceArray;
          },
          message: "What is the product you would like to buy?"
        },
        {
          name: "qty",
          type: "input",
          message: "How many units would you like to buy?"
        }
      ])
      .then(function (answer) {

        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < res.length; i++) {
          if (res[i].product_name === answer.choice) {
            chosenItem = res[i];
          }
        }

        // determine if bid was high enough
        if (chosenItem.stock_quantity > parseInt(answer.qty)) {

          var newQty = chosenItem.stock_quantity - parseInt(answer.qty);

          connection.query(

            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: newQty
              },
              {
                id: chosenItem.id
              }
            ],

            function (error) {
              if (error) throw err;
              console.log("Purchase placed successfully!\n");

              read();

              start();
            }
          );
        }
        else {
          // not enough qty
          console.log("Insufficient quantity!\n");
          start();
        };
      });
  });
};

// Log all results of the SELECT statement
function read() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;

    console.log(res);

  });
}






