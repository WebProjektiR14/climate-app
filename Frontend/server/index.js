const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1234",
    database: "climate_db",
});

app.post('/register', (req, res) => {
    const name = req.body.name
    const user = req.body.user
    const pass = req.body.pass

    db.query(
        "INSERT INTO user (fullname, username, password) VALUES (?,?,?)",
        [name,user,pass],
        (err, result) =>{
        console.log(err);
        }
    );
});

app.listen(3001, () => {
    console.log("running server");
});