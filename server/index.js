var express = require("express");
var app = express();
var connection = require('./database');
var cors = require("cors")

app.use(cors());
  

app.get('/query1', function(req, res) {
    let sql = "SELECT * FROM customer";
    connection.query(sql, function(err, results,fields){
        if (err) throw err;
        res.send(results);
        console.log(results)
    });
});
app.get('/query2', function(req, res) {
    let sql = "Select Username from users where balance > 0.00";
    connection.query(sql, function(err, results,fields){
        if (err) throw err;
        res.send(results);
        console.log(results)
    });
});

app.get('/query3', function(req, res) {
    let sql = "Delete from Users where userID = 1026;";
    connection.query(sql, function(err, results,fields){
        if (err) throw err;
        res.send(results);
        console.log(results)
    });
});
app.get('/query4', function(req, res) {
    let sql = "insert into Users(Userid,Usertype,Username,balance,address,email,phonenumber,password) values(1026, 'Vendor','User30', 10000 , 'Austin, TX', 'User5921@gmail.com', 4770410728, 'User4250')";
    connection.query(sql, function(err, results,fields){
        if (err) throw err;
        res.send(results);
        console.log(results)
    });
});

app.get('/query5', function(req, res) {
    let sql = "Delete from customer where purchasehistory = 'N/A'"
    connection.query(sql, function(err, results,fields){
        if (err) throw err;
        res.send(results);
        console.log(results)
    });
});

app.get('/query6', function(req, res) {
    let sql = 'Select Username from Users where address = "Chicago, IL" '
    connection.query(sql, function(err, results,fields){
        if (err) throw err;
        res.send(results);
        console.log(results)
    });
});

app.get('/query7', function(req, res) {
    let sql = 'Select productID from Order_ where returnable = 1 And Usertype = "Customer"'
    connection.query(sql, function(err, results,fields){
        if (err) throw err;
        res.send(results);
        console.log(results)
    });
});

app.get('/query8', function(req, res) {
    let sql = 'Select CenterId from Distributioncenter where Location = "Chicago, IL" and NumberofdeliveryCars  > 600'
    connection.query(sql, function(err, results,fields){
        if (err) throw err;
        res.send(results);
        console.log(results)
    });
});


app.get('/query9', function(req, res) {
    let sql = " Select productId,productname from product where ProductName like ('%Toaster%') "
    connection.query(sql, function(err, results,fields){
        if (err) throw err;
        res.send(results);
        console.log(results)
    });
});


app.get('/query10', function(req, res) {
    let sql = "Select WarehouseName from Warehouse where capacity > 45000000"
    connection.query(sql, function(err, results,fields){
        if (err) throw err;
        res.send(results);
        console.log(results)
    });
});
app.get('/query11', function(req, res) {
    let sql = "Select OrderID from order_ where Year(PurchaseDate) > 1999 AND returnable = 1;"
    connection.query(sql, function(err, results,fields){
        if (err) throw err;
        res.send(results);
        console.log(results)
    });
});
app.get('/query12', function(req, res) {
    let sql = 'Select Min(Capacity), Location from Warehouse where Location = "Chicago, IL" ;'
    connection.query(sql, function(err, results,fields){
        if (err) throw err;
        res.send(results);
        console.log(results)
    });
});
app.get('/query13', function(req, res) {
    let sql = "Select distinct(Location) from warehouse"
    connection.query(sql, function(err, results,fields){
        if (err) throw err;
        res.send(results);
        console.log(results)
    });
});

app.listen(3000, function(){
    console.log('App Listening on port 3000');
    connection.connect(function(err){
        if(err) throw err;
        console.log('Database connected!');
    })
});