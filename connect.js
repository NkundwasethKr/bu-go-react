const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const app = express();
const multer = require('multer')
const path = require('path')
const bodyparser = require('body-parser')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))

app.use(cors());
app.listen('4005', () => {
    console.log("Server started on port 4000 by Seth");
});

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bugo"
});

/*var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './product_images')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
 
var upload = multer({
    storage: storage
});*/

const getProducts = "SELECT * from product";
/*const selectData = () => {
    con.connect(function(err) {
        if (err) throw err;
        con.query(getProducts, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    });
}*/
app.get('/api/products', (req, res) => {
    con.connect(function(err) {
        if (err) throw err;
        con.query(getProducts, function(err, result) {
            if (err) throw err;
            console.log(result);
            return res.send(result);
        });
    });
});
/*con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE from product where id=13";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});*/


//selectData();

var image = "C:\Users\ASUS\Desktop\bubanana.jpg";


const insertProduct = () => {
    con.connect(function(err) {
        if (err) throw err;
        var insql = "INSERT INTO product(pname,pprice,ppicture) values('Banana',4000,'${image}')";
        con.query(insql, function(err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}