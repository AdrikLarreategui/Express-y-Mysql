const express = require ('express')
const app = express()
const mysql = require('mysql2')
const PORT = 3000
app.use(express.json())

const newDataBase = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'M00nch1ldr3n?',
    database: 'newDataBase'
})
newDataBase.connect()

//Ejercicio 1:
app.get('/createdb', (req,res) => {
    const sql = 'CREATE DATABASE newDataBase'
    newDataBase.query(sql,(err,result) => {
        if(err)throw err;
        console.log(result)
        res.send('Database created')
    })
})

app.get('/createTable', (req,res) =>{
    const sql = 'CREATE TABLE products(id int AUTO_INCREMENT, name VARCHAR (50), price VARCHAR (50), PRIMARY KEY(id))'
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('Products table created')
    })
})

app.get('/createTable3', (req,res) => {
    const sql = 'CREATE TABLE OtherTable(id int AUTO_INCREMENT, categories VARCHAR(50), patata VARCHAR(50), PRIMARY KEY(id))'
    newDataBase.query(sql, (err,result) => {
        if(err) throw err
        console.log(result)
        res.send('Categories table created')
    })
})

//Ejecicio 2:
app.post("/", (req, res) => {
    const sql = 'INSERT INTO products (name, price) values (phone, 200), (laptop, 500)'
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('Products added')
    })
})
//Falta añadir la categoría

app.listen(PORT, () => {
    console.log(`Server working at port ${PORT} `);
})